import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'
import products from 'utils/productsArray'

const productsObject = products.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
    }),
    {}
)

export const CartHeader = ({ productsInCart }) => {
    return (
        <div className="cartHeader">
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].name}:{' '}
                        {productsInCart[productId]}
                    </div>
                ))}
            </div>
            <div>
                total:
                {Object.keys(productsInCart).reduce(
                    (previousValue, currentItem) =>
                        previousValue +
                        productsInCart[currentItem] *
                            productsObject[currentItem].price,
                    0
                )}
            </div>
        </div>
    )
}
