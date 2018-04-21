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
import {removeCartItemFromAPI} from '../Utils/network'

export default class CartItemRow extends React.Component {
    constructor(props) {
        super(props)
        // this.name = this.props.item.item.Item.name
        // this.image = StringParser.getFirstImage(this.props.item.item.Item.images)
        // this.price = this.props.item.item.Item.price
        this.name = this.props.item.item.Item.name
        this.images = this.props.item.item.Item.images
        this.price = this.props.item.item.Item.price
        this.itemId = this.props.item.item.id
    }

    _removePressed() {
        console.log('removed')
        var request = removeCartItemFromAPI(this.itemId)
        request.then(res => res.json())
            .then(json => console.log('success'))
            .catch(err => console.log('failed to remove ' + err))
        this.props.getCart()
    }

    render() {
        const image = StringParser.getFirstImage(this.images)

        return(
            <TouchableHighlight underlayColor={'#C1C1C1'} style={styles.container}>
                <View style={styles.viewContainer}>
                    <Image source={{uri: image}} style={styles.photo} />
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>{this.name}</Text>
                        <Text style={styles.nameText}>${this.price}</Text>
                    </View>
                    <Text onPress={() => this._removePressed()}>X</Text>
                </View>
            </TouchableHighlight>
        )
    }
}