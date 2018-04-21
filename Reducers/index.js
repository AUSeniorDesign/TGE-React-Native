/*
Created by: Harry Summers

index.js

Description:
The purpose of this file is to combine all the reducers into a single file.
This way it is easier to work with but also the reducers can be separated into
separate files. Anything you want to map to props MUST be in here.
*/

import { combineReducers } from 'redux'
import items from './items'
import cartItems from './cart'
import feedItems from './feed'

const rootReducer = combineReducers({
    items,
    cartItems,
    feedItems
})

export default rootReducer