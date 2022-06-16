import React from 'react'
import { keys } from 'lodash'
import products , {getProductsObject} from 'utils/productsArray'



export const CartPage = ({ productsInCart , productsObject = getProductsObject(products)}) => {
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
