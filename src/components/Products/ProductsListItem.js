import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

export const ProductsListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image,
}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className='product-img'>
                        <img src={image} alt="" />
                    </div>
                    <h2>{name}</h2>
                    <p className="product-descr">{description}</p>
                    <div className="product-feautures">
                        <span>Type:</span> {type}
                    </div>
                    <div className="product-feautures">
                        <span>Capacity:</span> {capacity}GB
                    </div>
                    <div className="product-price">{price}$</div>
                </CardContent>
                <CardActions className="add-to-cart-block">
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
