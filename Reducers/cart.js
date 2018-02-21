/*
Created by: Harry Summers

cart.js

Description:
This function returns the reducer for the cart. Any function added 
to the Actions.js should be added to the switch statement. The reducer
returns the data returned by the action to the component that needs it.
*/

import { FETCHING_CART, FETCHING_CART_SUCCESS, FETCHING_ITEMS_SUCCESS, FETCHING_ITEMS_FAILURE } from '../Utils/Constants'

const initialState = {
    cartItems: [],
    isFetching: false, 
    error: false
}

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_CART: {
            return {
                ...state,
                isFetching: true,
                cartItems: []
            }
        }
        case FETCHING_CART_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                cartItems: action.payload
            }
        }
        case FETCHING_ITEMS_FAILURE: {
            return {
                ...state, 
                isFetching: false,
                error: true
            }
        }
        default: 
            return state
    }
}