import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { ProductsListItem } from './ProductsListItem'

export const ProductsList = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                style={{
                    margin: '30 0',
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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
            </Grid>
        </>
    )
}
