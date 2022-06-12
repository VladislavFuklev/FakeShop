import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import React from 'react'

export const Main = ({ cartDate, click }) => {
    return (
        <>
            <Container>
                <ProductsList cartDate={cartDate} click={click} />
            </Container>
        </>
    )
}





