import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import './checkout.scss'

export const Checkout = () => {
    const [state, setState] = useState({
        name: '',
        address: '',
        isOrderSend: false,
    })

    const orderName = (e) => {
        setState({
            name: e.target.value,
        })
    }
    const orderAddress = (e) => {
        setState({
            address: e.target.value,
        })
    }
    const orderPassword = (e) => {
        setState({
            address: e.target.value,
        })
    }

    const renderMessage = () => {
        return (
            <div>
                Dear {state.name}, thanks for you orderAddress
                <p>Delivery address: {state.address}</p>
            </div>
        )
    }

    const sendForm = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://run.mocky.io/v3/6dc425bf-d13e-4582-baa4-58bd36d5df6d',
                {
                    name: state.name,
                    address: state.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) =>
                setState({
                    name,
                    address,
                    isOrderSend: true,
                })
            )
    }

    const renderForm = () => {
        console.log(state)
        return (
            <form className="form" onSubmit={sendForm}>
                <div>
                    <TextField
                        className="text-field"
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        type="text"
                        onChange={orderName}
                    />
                </div>
                <div>
                    <TextField
                        className="text-field"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                        onChange={orderName}
                    />
                </div>
                <div>
                    <TextField
                        className="text-field"
                        id="outlined-basic"
                        label="Your address"
                        variant="outlined"
                        type="text"
                        onChange={orderAddress}
                    />
                </div>
                <div>
                    <TextField
                        className="text-field"
                        id="outlined-basic"
                        label="Your password"
                        variant="outlined"
                        type="password"
                        onChange={orderPassword}
                    />
                </div>
                <button className="form-btn">Send</button>
            </form>
        )
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Registration</h1>
            {state.isOrderSend !== true ? renderForm() : renderMessage()}
        </>
    )
}
