import React from 'react'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartName } from 'components/Cart/CartName'
import { Grid } from '@mui/material'
import { CartProductListItemExtended } from 'components/Cart/CartProductListItemExtended'

export const CartPage = ({ productsInCart }) => {
    return (
        <>
            <h1>Cart page</h1>
            <Grid container spacing={4}>
                <CartName
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
