import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import { CartPage } from 'pages/Cart/CartPage'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const Main = ({ click }) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route path="/" element={<ProductsList click={click} />} />
                    <Route path="/cart" element ={<CartPage/>}/>
                </Routes>
            </Container>
        </>
    )
}
