/*
Created by: Harry Summers

ConfigureStore.js

Description:
This function creates the initial json store that redux uses
to manage the state throughout the app. It is added to the provider
in the App.js file which completely surrounds the entire app.
*/


import { createStore, applyMiddleware } from 'redux'
import app from '../Reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
    let store = createStore(app, applyMiddleware(thunk))
    return store
}


