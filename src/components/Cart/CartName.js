import React from 'react'
import { keys } from 'lodash'
import products, { getProductsObject } from 'utils/productsArray'

export const CartName = ({
    productsInCart,
    productsObject = getProductsObject(products),
}) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[productId].name}:{' '}
                    {productsInCart[productId]}
                </div>
            ))}
        </div>
    )
}
