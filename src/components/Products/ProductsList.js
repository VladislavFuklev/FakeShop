import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ProductsListItem } from './ProductsListItem'
// import productsArray from 'utils/productsArray'
import { useSelector } from 'react-redux'

export const ProductsList = ({ click }) => {

    const productsArray = useSelector((state)=> state.products)

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
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                click={click}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
