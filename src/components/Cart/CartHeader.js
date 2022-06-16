import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'
import products , {getProductsObject} from 'utils/productsArray'


export const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(products),
}) => {
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
