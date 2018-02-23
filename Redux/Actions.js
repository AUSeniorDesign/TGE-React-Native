/*
Created by: Harry Summers

Actions.js

Description:
This function defines all the actions that can be requested from 
redux. The result of the action will be passed through the reducer so make sure
to update the corresponding reducer file when a new action is added here.
These actions add to the immutable state dictionary that redux manages.
*/


import { FETCHING_ITEMS, 
    FETCHING_ITEMS_SUCCESS, 
    FETCHING_ITEMS_FAILURE,
    FETCHING_CART,
    FETCHING_CART_SUCCESS,
    FETCHING_CART_FAILURE } from '../Utils/Constants'

export function fetchItemsFromAPI() {
    console.log('fetching items from api')
    return(dispatch) => {
        dispatch(getItems())
        // TODO: Refactor this so it's not using Promises because Haven will yell at me.
        fetch('https://tge.mybluemix.net/items')
            .then(res => res.json())
            .then(json => dispatch(getItemsSuccess(json)))
            .catch(err => dispatch(getItemsFailure(err)))

            
    }
}

function getItems() {
    console.log('getting items')

    return {
        type: FETCHING_ITEMS
    }
}

function getItemsSuccess(payload) {
    console.log('getting items was successful ' + payload)
    return {
        type: FETCHING_ITEMS_SUCCESS,
        payload
    }
}

function getItemsFailure(err) {
    console.log("getting items was unsuccessful " + err)

    return {
        type: FETCHING_ITEMS_FAILURE,
        error: true
    }
}

export function fetchCartFromAPI() {
    console.log('fetching cart from api')

    return(dispatch) => {
        dispatch(getCart())

        fetch('https://tge.mybluemix.net/users/3/cart', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(json => dispatch(getCartSuccess(json)))
            .catch(json => dispatch(getCartFailure()))
    }
}

function getCart() {
    console.log('getting cart')

    return {
        type: FETCHING_CART
    }
}


function getCartSuccess(payload) {
    console.log('cart')
    console.log(payload)
    return {
        type: FETCHING_CART_SUCCESS,
        payload
    }
}

function getCartFailure(payload) {
    console.log('get cart was unsuccessful ')
    return {
        type: FETCHING_CART_FAILURE,
        error: true
    }
}