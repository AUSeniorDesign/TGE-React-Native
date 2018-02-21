/*
Created by: Harry Summers

index.js

Description:
The purpose of this file is to combine all the reducers into a single file.
This way it is easier to work with but also the reducers can be separated into
separate files.
*/

import { combineReducers } from 'redux'
import items from './items'
import cartItems from './cart'

const rootReducer = combineReducers({
    items,
    cartItems
})

export default rootReducer