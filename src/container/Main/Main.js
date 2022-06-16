import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import { CartPage } from 'pages/Cart/CartPage'
import { Payment } from 'pages/Payment/PaymentPage'
import { ProductPage } from 'pages/Products/ProductsPage'
import { ShippingPage } from 'pages/Shipping/ShippingPage'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const Main = ({ click }) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route path="/" element={<ProductsList click={click} />} />
                    <Route path="/cart" element ={<CartPage/>}/>
                    <Route path="/payment" element ={<Payment/>}/>
                    <Route path="/products" element ={<ProductPage/>}/>
                    <Route path="/shipping" element ={<ShippingPage/>}/>
                </Routes>
            </Container>
        </>
    )
}
