import { FETCHING_ITEMS, FETCHING_ITEMS_SUCCESS, FETCHING_ITEMS_FAILURE } from '../Utils/Constants'

export function fetchItemsFromAPI() {
    console.log('fetching from api')
    return(dispatch) => {
        dispatch(getItems())
        // TODO: Refactor this so it's not using Promises because Haven will yell at me.
        fetch('https://tge.mybluemix.net/items')
            .then(res => res.json())
            .then(json => dispatch(getItemsSuccess(json.items)))
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