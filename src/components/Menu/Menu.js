import React from 'react'
import Button from '@mui/material/Button'
import { Link, NavLink } from 'react-router-dom'
import './menu.scss'

export const Menu = () => {
    return (
        <>
           <Button color="inherit">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    Home
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    PRODUCTS
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/payment"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    PAYMENT
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/shipping"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    SHIPPING
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    CART
                </NavLink>
            </Button>
        </>
    )
}
