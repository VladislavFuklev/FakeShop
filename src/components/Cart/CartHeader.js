import React from 'react'
import './CartHeader.scss'
import {keys} from 'lodash'

export const CartHeader = ({productsInCart}) => {
    return (
        <div className="cartHeader">
           {keys(productsInCart).map((productId) => (
            <div key={productId}>
                {productId}: {productsInCart[productId]}
            </div>
           ))}
        </div>
    )
}
