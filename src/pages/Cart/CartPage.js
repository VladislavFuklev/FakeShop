import React from 'react'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartName } from 'components/Cart/CartName'
import { Grid } from '@mui/material'
import { CartProductListItemExtended } from 'components/Cart/CartProductListItemExtended'
import { useSelector } from 'react-redux'


export const CartPage = ({
    removeProductFromCart,
    changeProductQuantity,
    id,
}) => {
    const productsInCart = useSelector(({ productsInCart }) => productsInCart)
    return (
        <>
            <h1>Cart page</h1>
            <Grid container spacing={4}>
                <CartName
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
