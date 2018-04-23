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
import styles from '../Style/CartListStyle'
import CartItemRow from './CartItemRow'

export default class CartList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getCart()
    }

    _renderRowData(item) {
        return <CartItemRow item={item} getCart={this.props.getCart}/>
    }

    _keyExtractor = (item, index) => item.id

    _calculateCartTotal(items) {
        var total = 0
        for (var i = 0; i < items.length; i++) {
            total += items[i].Item.price
        }
        return total.toFixed(2)
    }
    render() {
        const { cartItems } = this.props.cartItems
        const total = this._calculateCartTotal(cartItems)
        return(
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    keyExtractor={this._keyExtractor}
                    data={cartItems}
                    renderItem={(rowData) => this._renderRowData(rowData)}
                />
                <View style = {styles.total}>
                    <Text style={styles.price}>Total: ${total}</Text>
                </View>
            </View>
        )
    }
}