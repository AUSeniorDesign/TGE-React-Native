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
        return <CartItemRow item={item}/>
    }

    _keyExtractor = (item, index) => item.id

    render() {
        const { cartItems } = this.props.cartItems

        return(
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={cartItems}
                    renderItem={(rowData) => this._renderRowData(rowData)}
                />
            </View>
        )
    }
}