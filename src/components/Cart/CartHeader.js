import React from 'react'
import './CartHeader.scss'
import { CartTotal } from './CartTotal'
import { CartName } from './CartName'
import { useSelector } from 'react-redux'

export const CartHeader = () => {
    const productsInCart = useSelector(({ productsInCart }) => productsInCart)

    return (
        <div className="cartHeader">
            <CartName productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
