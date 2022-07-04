import { Button, Card, TextField } from '@mui/material'
import React, { useState } from 'react'
import arrReviews from './ArrRewies'
import './reviews.scss'

export const Reviews = () => {
    const [reviews, SetReviews] = useState(arrReviews)

    const [newReview, SetNewReviews] = useState({
        name: '',
        text: '',
    })
    const handleName = (e) =>
        SetNewReviews((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))

    const handleText = (e) =>
        SetNewReviews((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))

    const reviewsSend = (e) => {
        e.preventDefault()
        SetNewReviews({
            name: '',
            text: '',
        })
        SetReviews((value) => {
            return [...value, newReview]
        })
    }

    return (
        <>
            <h1>Reviews</h1>
            {reviews.map(({ name, text }, i) => (
                <Card className="reviews-block-item" key={i}>
                    <div className="reviews-name">Name:{name}</div>
                    <div>Message:{text}</div>
                </Card>
            ))}
            <h3>Please leave review about this product</h3>
            <form>
                <div>
                    <TextField
                        size="small"
                        label="Name"
                        margin="normal"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <TextField
                        size="small"
                        label="Text"
                        margin="normal"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="contained" onClick={reviewsSend}>
                    Leave review
                </Button>
            </form>
        </>
    )
}
