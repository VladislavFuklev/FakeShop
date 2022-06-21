import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import './CartProductExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'

export const CartProductListItemExtended = ({ product, productCount }) => {
    return (
        <Grid item xs={12} sm={6}>
            <Card className="cart-product-extended">
                <div>
                    <img
                        className="media"
                        src={product.image}
                        alt={product.name}
                    />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <p>Price for one item : {product.price}</p>
                    <div>Count: {productCount}</div>
                    <Button variant='outlined'>
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
