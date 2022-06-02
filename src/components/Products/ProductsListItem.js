import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import "./ProductsListItem.scss"

export const ProductsListItem = (props) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                    <div>Type: {props.type}</div>
                    <div>Capacity: {props.capacity}GB</div>
                    <div>{props.price}$</div>
                </CardContent>
                <CardActions className='add-to-cart-block'>
                    <Button variant='contained'>Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
