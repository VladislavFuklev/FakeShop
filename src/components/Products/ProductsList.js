import { Card, Typography } from '@mui/material'
import React from 'react'
import { ProductsListItem } from './ProductsListItem'

export const ProductsList = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                style={{
                    marginTop: 30,
                    textTransform: 'uppercase',
                }}
            >
                Products List
            </Typography>
            <ProductsListItem/>
            <ProductsListItem/>
            <ProductsListItem/>
        </>
    )
}
