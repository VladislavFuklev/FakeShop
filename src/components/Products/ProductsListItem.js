import React from 'react'
import { useState } from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
import PropTypes from 'prop-types'
import { Quantity } from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch, useSelector } from 'react-redux'

export const ProductsListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    click,
}) => {
    const [count, setCount] = useState(1)
    const onIncrementClick = () => setCount(count + 1)
    const onDecrementClick = () => setCount(count - 1)

    const isLiked = useSelector((state) => state[id])
    const dispatch = useDispatch()

    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            isLiked
                                ? dispatch({
                                      type: 'DISLIKE',
                                      id,
                                  })
                                : dispatch({
                                      type: 'LIKE',
                                      id,
                                  })
                        }}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <h2>{name}</h2>
                    <p className="product-descr">{description}</p>

                    <div className="product-feautures">
                        <span>Type:</span> {type}
                    </div>

                    <div className="product-feautures">
                        <span>Capacity:</span> {capacity}GB
                    </div>
                    <div className="product-price">{price}$</div>
                    <Quantity
                        count={count}
                        onDecrementClick={onDecrementClick}
                        onIncrementClick={onIncrementClick}
                        minCount={1}
                    />
                </CardContent>
                <CardActions className="add-to-cart-block">
                    <Button variant="outlined" onClick={() => click(id, count)}>
                        Add to cart
                    </Button>
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
