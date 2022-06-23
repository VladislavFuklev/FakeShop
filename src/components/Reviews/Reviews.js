import { Card, TextField } from '@mui/material'
import React, { useState } from 'react'
import arrReviews from './ArrRewies'
import './reviews.scss'

export const Reviews = () => {
    const [reviews, SetReviews] = useState(arrReviews)

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
                    <TextField size='small' label='Name' margin='normal'/>
                </div>
                <div>
                    <TextField size='small' label='Text' margin='normal'/>
                </div>
            </form>
        </>
    )
}
