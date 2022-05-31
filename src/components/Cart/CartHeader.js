import React from "react";
import './CartHeader.scss';


export const CartHeader = () => {
    const a = false;
    return (
        <div className={a ? 'white' : 'red'}>
            <div>0</div>
            <div>0$</div>
        </div>
    )
}