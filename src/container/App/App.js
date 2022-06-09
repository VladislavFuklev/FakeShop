import React, { useState } from 'react'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {
    const [cartDate, setCartDate] = useState({
        count: 10,
        price: 100,
    })
    return (
        <>
            <CssBaseline />
            <Header cartDate={cartDate}/>
            <Main />
            <Footer />
        </>
    )
}
