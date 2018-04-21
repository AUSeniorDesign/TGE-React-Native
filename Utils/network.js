import {BASE_URL} from './Constants'

export function loginWithFacebook(token) {

        var body = {
            "access_token": token
        }

        return fetch(BASE_URL + 'users/auth/facebook', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
}

export function getUsersMe() {
    
    return fetch(BASE_URL + 'users/me', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

}

export function getCartFromAPI() {
    return fetch(BASE_URL + 'cart', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
}

export function getItemsFromAPI() {
    return fetch(BASE_URL + 'items')
            
}

export function removeCartItemFromAPI(itemId) {
    return fetch(BASE_URL + 'cart/' + itemId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
}