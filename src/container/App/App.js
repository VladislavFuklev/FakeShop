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
    const click = () =>
        setCartDate((prevState) => ({
            count: prevState.count + 1,
            price: prevState.price + 1,
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
