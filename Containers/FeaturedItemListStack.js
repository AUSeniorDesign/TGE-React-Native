/*
Created by: Harry Summers

FeaturedItemListStack.js

Description:
Initializes the navigation for the featured item tab. When an item is clicked in 
the instagram-like view it will takeyou to the detail.
*/

import ItemDetail from '../Components/ItemDetail'
import FeaturedItemListContainer from './FeaturedItemListContainer'
import { StackNavigator } from 'react-navigation' 

export default StackNavigator({
    List: {
      screen: FeaturedItemListContainer,
    },
    Detail: {
      screen: ItemDetail,
    },
  }
);
  

