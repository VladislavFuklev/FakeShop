import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import './CartProductExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import { Quantity } from 'components/Quantity/Quantity'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    const isLiked = useSelector((state) => state[product.id])
    const dispatch = useDispatch()
    return (
        <Grid item xs={12} sm={6}>
            <Card className="cart-product-extended">
                <div>
                    <img
                        className="media"
                        src={product.image}
                        alt={product.name}
                    />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <p>Price for one item : {product.price}</p>
                    <div>Count: {productCount}</div>

                    <Quantity
                        onDecrementClick={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        count={productCount}
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        style={{ marginTop: '20px', marginRight:'10px' }}
                        onClick={() => {
                            isLiked
                                ? dispatch({
                                      type: 'DISLIKE',
                                      id: product.id,
                                  })
                                : dispatch({
                                      type: 'LIKE',
                                      id: product.id,
                                  })
                        }}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <Button
                        style={{ marginTop: '20px' }}
                        onClick={() => removeProductFromCart(product.id)}
                        variant="outlined"
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
