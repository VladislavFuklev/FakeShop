import React, { useState } from 'react'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {
    const [cartDate, setCartDate] = useState({
        count: 0,
        price: 0,
    })
    const click = (count, price) =>
        setCartDate((prevState) => ({
            count: prevState.count + count,
            price: prevState.price + price
        }))

    return (
        <>
            <CssBaseline />
            <Header cartDate={cartDate} />
            <Main cartDate={cartDate} click={click} />
            <Footer />
        </>
    )
}
