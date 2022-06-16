import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'
import products, { getProductsObject } from 'utils/productsArray'
import { CartTotal } from './CartTotal'
import { CartName } from './CartName'

export const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(products),
}) => {
    return (
        <div className="cartHeader">
            {/* <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].name}:{' '}
                        {productsInCart[productId]}
                    </div>
                ))}
            </div> */}
           
            <CartName productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
