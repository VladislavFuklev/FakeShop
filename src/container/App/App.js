import React, { useState } from 'react'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 5,
        2: 5,
    })

    const click = (productId, count) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [productId]: (prevState[productId] || 0) + count,
        }))
    }
    const removeProductFromCart = (productId) => {
        setProductsInCart((prevState) => {
            let prevProductsInCart = {...prevState}
            delete prevProductsInCart[productId]
            return prevProductsInCart
        })
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => removeProductFromCart(2)}>Delete</button>
            <Main productsInCart={productsInCart} click={click} />
            <Footer />
        </>
    )
}
