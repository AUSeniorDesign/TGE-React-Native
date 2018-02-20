import ItemDetail from '../Components/ItemDetail'
import ItemListContainer from './ItemListContainer'
import { StackNavigator } from 'react-navigation' 
import React from 'react'
import { Button, TouchableHighlight } from 'react-native'
import CartContainer from '../Components/CartList'

function rightPressed(navigate) {
  console.log('Hello')
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
  
// header: ({navigate}) => ({
//   right: (
//       <Button title={"Cart"} onPress={() => rightPressed(navigate)} />
//   ),
// }),

