import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
import PropTypes from 'prop-types'

export const ProductsListItem = ({
    name,
    description = "No desc",
    type,
    capacity,
    price,
    image = "images/123.png"
}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
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

ProductsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductsListItem.defaultProps = {
    description: 'No desc...' ,
    // image:'images/123.png'
}
