/*
Created by: Harry Summers

CartList.js

Description:
This componenet defines the screen for the cart.
The user will be able to add items from the detail screen of that
image and then checkout on this screen. This component is wired
to redux and will fetch for items in the cart with the API. When the items
are received they are added to a simple table.
*/

import React from 'react' 
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  FlatList} from 'react-native' 
import { StackNavigator } from 'react-navigation' 
import styles from '../Style/CartListStyle'
import CartItemRow from './CartItemRow'

export default class CartList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            item: {
                id: 1,
                name: "Underground Sea MTG Card Revised Edition Dual Land RARE Magic the Gathering",
                image: "http://i.frg.im/5YhjFSrb/underground-1.jpg",
                price: 9.99
            }
        }
    }

    componentWillMount() {
        this.props.getCart()
        
    }

    _renderRowData(item) {
        return <CartItemRow item={item}/>
    }

    _keyExtractor = (item, index) => item.id

    render() {
        var item = this.state.item
        //const { cartItems } = this.props.cartItems
        var items = []
        items.push(item)

        return(
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={items}
                    renderItem={(rowData) => this._renderRowData(rowData)}
                />
            </View>
        )
    }
}