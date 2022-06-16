import React from 'react'
import { keys } from 'lodash'
import products from 'utils/productsArray'

const productsObject = products.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
    }),
    {}
)

export const CartPage = ({ productsInCart }) => {
    return (
        <div className="cartHeader">
            <h1>Cart page</h1>
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].name}:
                        {productsInCart[productId]} :
                        {productsObject[productId].price}
                    </div>
                ))}
            </div>
            <div>
                total:
                {keys(productsInCart).reduce(
                    (previousValue, currentItem) =>
                        previousValue +
                        productsInCart[currentItem] *
                            productsObject[currentItem].price,
                    0
                )}
            </div>
            <div></div>
        </div>
    )
}
