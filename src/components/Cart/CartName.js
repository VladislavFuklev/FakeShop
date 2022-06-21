import React from 'react'
import { keys } from 'lodash'
import products, { getProductsObject } from 'utils/productsArray'
import { CartProductListItem } from './CartProductListItem'

export const CartName = ({
    productsInCart,
    productsObject = getProductsObject(products),
    CartItem = CartProductListItem,
}) => {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[productId]}
                    productCount={productsInCart[productId]}
                />
            ))}
        </>
    )
}
