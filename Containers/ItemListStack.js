/*
Created by: Harry Summers

ItemListStack.js

Description:
This file defines the StackNavigator for the ItemList and ItemDetail component.
It also contains the logic for the Cart button which takes you to your items 
in the cart.
*/


import ItemDetail from '../Components/ItemDetail'
import ItemListContainer from './ItemListContainer'
import { StackNavigator } from 'react-navigation' 
import React from 'react'
import { Button, TouchableHighlight } from 'react-native'
import CartContainer from './CartContainer'

function rightPressed(navigate) {
  navigate('Cart')
}

ItemListContainer.navigationOptions = props => {
  const { navigation } = props
  return {
    headerRight:(
      <Button title={"Cart"} onPress={() => rightPressed(navigation.navigate)} />
    )
  }
}

export default StackNavigator({
    List: {
      screen: ItemListContainer,
    },
    Detail: {
      screen: ItemDetail,
    },
    Cart: {
      screen: CartContainer,
    }

  }
);
