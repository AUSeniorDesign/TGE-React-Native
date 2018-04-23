/*
Created by: Harry Summers

AppStack.js

Description:
App Stack defines the navigation between the Login screen and the main application.
It's purpose is to be separated from the other StackNavigator so that when the user
needs to be auto-logged in, it will not need to have this initial navigation.
*/


import React from 'react'
import { Button,Text, TouchableHighlight } from 'react-native'

import { StackNavigator } from 'react-navigation' 
import Login from '../Components/Login'
import AppContainer from './AppContainer'
import ItemListContainer from './ItemListContainer'
import ItemDetail from '../Components/ItemDetail'
import CartListContainer from './CartListContainer'
import Checkout from '../Components/Checkout'
import styles from '../Style/ItemListStackStyle'


function rightPressed(navigate) {
  navigate('Cart')
}


ItemListContainer.navigationOptions = props => {
  const { navigation } = props
  return {
    headerRight:(
      <Text style={styles.button} onPress={() => rightPressed(navigation.navigate)}>Cart </Text>
    )
  }
}
export default StackNavigator({
    Login: {
      screen: Login,
    },
    Content: {
      screen: AppContainer,
    },
    List: {
      screen: ItemListContainer,
    },
    Detail: {
      screen: ItemDetail,
    },
    Cart: {
      screen: CartListContainer,
    },
    Checkout: {
      screen: Checkout
    }
  },

);
  

