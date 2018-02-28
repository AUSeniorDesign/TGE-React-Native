/*
Created by: Harry Summers

ItemDetail.js

Description:
This component defines the detail screen for the item.
The user has the ability to add the item to their cart to make
a later purchase. 
*/

import React from 'react' 
import { 
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  ScrollView} from 'react-native' 
import { StackNavigator } from 'react-navigation' 
import styles from '../Style/ItemDetailStyle'
import StringParser from '../Utils/StringParser'

export default class ItemDetail extends React.Component {
    
  static navigationOptions = {
      title: 'Item Information',
    }
      
  constructor(props) {
    super(props) 
    this.itemId = props.navigation.state.params.item.id
    this.name = props.navigation.state.params.item.name
    this.image = StringParser.getFirstImage(props.navigation.state.params.item.images)``
    this.price = props.navigation.state.params.item.price
    this.description = StringParser.removeHTML(props.navigation.state.params.item.description)
  }

  _addToCartPressed(itemId) {
    console.log('Add to cart pressed')

    fetch('https://tge.mybluemix.net/users/3/cart', {
            method: 'POST',
            body: JSON.stringify({"itemId": itemId}), 
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(() => console.log('Success'))
            .catch((err) => console.log('Failure ', err))
  }

  render() {

    return (
        <ScrollView style={styles.container}>
          <View style={styles.viewCenter}>
            <Image source={{uri: this.image}} style={styles.photo}/>
          </View>
          <Text style={styles.titleText}>{this.name}</Text>
          <Text style={styles.subTitleText}>{this.price}</Text>
          <View style={styles.viewCenter}>
            <TouchableHighlight style={styles.buttonView}  onPress={() => this._addToCartPressed(this.itemId)} underlayColor={'#00E676'}>
            <Text style={styles.buyText}>Add To Cart</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.titleText}>Item Description</Text>
          <Text style={styles.descriptionText}>{this.description}</Text>
        </ScrollView>
    ) 
  }
}

