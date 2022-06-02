import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ProductsListItem } from './ProductsListItem'
import productsArray from 'utils/productsArray'

export const ProductsList = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                style={{
                    margin: '30px 0',
                    textTransform: 'uppercase',
                }}
            >
                Products List
            </Typography>
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {productsArray.map((product) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductsListItem
                            name={product.name}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
