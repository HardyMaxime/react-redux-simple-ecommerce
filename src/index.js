import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import ProductsReducer from './store/reducers/productsReducer'
import FiltersReducer from './store/reducers/filtersReducer'
import CartReducer from './store/reducers/cartReducer'

import App from './App'

const combineAllReducers = combineReducers({
  prod: ProductsReducer,
  filter: FiltersReducer,
  cart: CartReducer
})

const store = createStore(combineAllReducers, applyMiddleware(thunk))

const root = (
        <Provider store={store} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
)

ReactDOM.render(root, document.getElementById('root'))
