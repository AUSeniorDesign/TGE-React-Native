/*
Created by: Harry Summers

AppStack.js

Description:
App Stack defines the navigation between the Login screen and the main application.
It's purpose is to be separated from the other StackNavigator so that when the user
needs to be auto-logged in, it will not need to have this initial navigation.
*/


import { StackNavigator } from 'react-navigation' 
import Login from '../Components/Login'
import AppContainer from './AppContainer'

export default StackNavigator({
    Login: {
      screen: Login,
    },
    Content: {
      screen: AppContainer,
    },
  },

);
  

