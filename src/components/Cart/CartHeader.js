import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'
import products from 'utils/productsArray'



export const CartHeader = ({ productsInCart}) => {
    return (
        <div className="cartHeader">
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productId}: {productsInCart[productId]}
                    </div>
                ))}
            </div>
            <div>total:
                {Object.keys(productsInCart).reduce((previousValue, currentItem) => (
                   previousValue + (productsInCart[currentItem]) * products[currentItem - 1].price
                ), 0)}
            </div>
        </div>
    )
}
