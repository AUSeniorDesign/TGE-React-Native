/*
Created by: Harry Summers

CartItemRow.js

Description:
This class defines the component for the cart item row. 
The row has information about the item such as the name, price,
and the row gives the ability to remove item from cart.
*/

import React from 'react'
import {TouchableHighlight, Image, Text, View} from 'react-native'
import styles from '../Style/CartItemRowStyle'
import StringParser from '../Utils/StringParser' 

export default class CartItemRow extends React.Component {
    constructor(props) {
        super(props)
        this.name = this.props.item.item.Item.name
        this.image = StringParser.getFirstImage(this.props.item.item.Item.images)
        this.price = this.props.item.item.Item.price

    }

    render() {
        return(
            <TouchableHighlight underlayColor={'#C1C1C1'} style={styles.container}>
                <View>
                    <Image source={{uri: this.image}} style={styles.photo} />
                    <Text>{this.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}