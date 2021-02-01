import {combineReducers}  from 'redux'

import filters from './filters'
import cart from './cart'

export const rootReducer = combineReducers({
    filters, 
    cart
})