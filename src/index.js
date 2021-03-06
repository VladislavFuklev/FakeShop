import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './container/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {
    compose,
    legacy_createStore as createStore,
    applyMiddleware,
} from 'redux'
import { rootReducer } from 'redux/rootReducer'
import thunk from 'redux-thunk'

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
