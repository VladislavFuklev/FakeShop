import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

export const ProductsListItem = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4>Iphone XS</h4>
                    <p>This is iPhone XS</p>
                    <div>Type: iPhone</div>
                    <div>Capacity: 64GB</div>
                    <div>500$</div>
                </CardContent>
                <CardActions>
                    <Button>Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
