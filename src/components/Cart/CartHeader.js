import React from 'react'
import './CartHeader.scss'
import { App } from 'container/App/App'

export const CartHeader = ({cartDate}) => {
    
    return (
        <div className="cartHeader">
            <div>{cartDate.count}$</div>
            <div>{cartDate.price}$</div>
        </div>
    )
}
