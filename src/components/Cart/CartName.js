import React from 'react'
import { keys } from 'lodash'
import { getProductsObject } from 'utils/productsArray'
import { CartProductListItem } from './CartProductListItem'
import { useSelector } from 'react-redux'

export const CartName = ({
    productsInCart,
    CartItem = CartProductListItem,
}) => {
    const productsArray = useSelector((state) => state.products)
    if (productsArray.length === 0) {
        return null
    } else {
        const productsObject = getProductsObject(productsArray)
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
}
