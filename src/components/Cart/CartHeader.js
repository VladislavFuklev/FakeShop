import React from 'react'
import './CartHeader.scss'
import { CartTotal } from './CartTotal'
import { CartName } from './CartName'

export const CartHeader = ({
    productsInCart,
}) => {
    return (
        <div className="cartHeader">
            <CartName productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
