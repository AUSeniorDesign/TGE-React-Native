import { FETCHING_FEED,
    FETCHING_FEED_SUCCESS,
    FETCHING_FEED_FAILURE } from '../Utils/Constants'

    const initialState = {
        feedItems: [],
        isFetching: false,
        error: false
    }

export default function feedReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_FEED: {
            return {
                ...state,
                isFetching: true,
                feedItems: []
            }
        }
        case FETCHING_FEED_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                feedItems: action.payload
            }
        }
        case FETCHING_FEED_FAILURE: {
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