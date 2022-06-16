import React from 'react'
import { keys } from 'lodash'
import products , {getProductsObject} from 'utils/productsArray'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartName } from 'components/Cart/CartName'




export const CartPage = ({ productsInCart , productsObject = getProductsObject(products)}) => {
    return (
        <div className="cartHeader">
            <h1>Cart page</h1>
            {/* <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].name}:
                        {productsInCart[productId]} :
                        {productsObject[productId].price}
                    </div>
                ))}
            </div> */}
            <CartName productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart}/>

        </div>
    )
}
