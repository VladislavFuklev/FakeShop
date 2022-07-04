import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import { CartPage } from 'pages/Cart/CartPage'
import { Payment } from 'pages/Payment/PaymentPage'
import { ProductPage } from 'pages/Products/ProductsPage'
import { ShippingPage } from 'pages/Shipping/ShippingPage'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ProductsList
                                    addProductToCart={addProductToCart}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                </Routes>
            </Container>
        </>
    )
}
