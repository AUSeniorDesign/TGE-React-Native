import { FETCHING_ITEMS, FETCHING_ITEMS_SUCCESS, FETCHING_ITEMS_FAILURE } from '../Utils/Constants'

const initialState = {
    items: [],
    isFetching: false,
    error: false
}

export default function itemReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_ITEMS: {
            return {
                ...state,
                isFetching: true,
                items: []
            }
        }
        case FETCHING_ITEMS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                items: action.payload
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