import React from 'react'
import { keys } from 'lodash'
import products, { getProductsObject } from 'utils/productsArray'

export const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(products),
}) => {
    return (
        <div style={{
            textAlign:'center', fontWeight:'bold'
        }}>
            total:
            {keys(productsInCart).reduce(
                (previousValue, currentItem) =>
                    previousValue +
                    productsInCart[currentItem] *
                        productsObject[currentItem].price,
                0
            )}
        </div>
    )
}
