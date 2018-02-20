/*
Created by: Harry Summers

App.js

Description:
This is the entry point for the application. 
The main role of this class is to define the initial component which
is AppStack, which defines the initial navigation of the Application. The AppStack
is wrapped in a Provider component which is necessary for implementing redux
into the application. The immutable store is passed into the provider so 
that it can be accessible for every component that needs to map their state
to props.
*/


import React from 'react' 
import { Provider } from 'react-redux'
import configureStore from './Redux/ConfigureStore'
import AppStack from './Containers/AppStack'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <AppStack/>
        </Provider>
    ) 
  }

}
