import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import React from 'react'

export const Main = ({ click }) => {
    return (
        <>
            <Container>
                <ProductsList click={click} />
            </Container>
        </>
    )
}





