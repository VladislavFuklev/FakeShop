import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './container/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import { productsLikeReducer } from 'redux/productsLikeReducer'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = createStore(
    productsLikeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
