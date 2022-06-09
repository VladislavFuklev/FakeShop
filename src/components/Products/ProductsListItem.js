import React from 'react'
import { useState } from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
import PropTypes from 'prop-types'

export const ProductsListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image,
}) => {
    const [count, setCount] = useState(1)
    const onIncrementClick = () => setCount(count + 1)
    const onDecrementClick = () => setCount(count - 1)

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
                    <div className="product-quantity">
                        <Button
                            variant="contained"
                            onClick={onDecrementClick}
                            disabled={count === 1}
                        >
                            -
                        </Button>
                        <TextField size="small" value={count} />
                        <Button
                            variant="contained"
                            onClick={onIncrementClick}
                            disabled={count === 10}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="add-to-cart-block">
                    <Button variant="outlined">Add to cart</Button>
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
    description: 'No desc...',
    image: 'images/123.png',
}
