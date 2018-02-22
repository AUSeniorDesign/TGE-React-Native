/*
Created by: Harry Summers

FeaturedItemRow.js

Description:
This class defines the component for the row item. The idea
is for the row to look like a post from instagram.
*/

import React from 'react'
import { TouchableHighlight, Image, Text, View } from 'react-native';
import styles from '../Style/FeaturedItemRowStyle'
import StringParser from '../Utils/StringParser'

export default class FeaturedItemRow extends React.Component {

    _rowPressed() {
        this.props.navigate('Detail', this.props) 
    }

    render() {

        const image = StringParser.getFirstImage(this.props.item.images)
        const name = this.props.item.name

        return(
            <TouchableHighlight underlayColor={'#BDBDBD'} style={styles.container} onPress={() => this._rowPressed()}> 
                <View style={styles.viewCenter}>
                    <Image source={{uri: image}} style={styles.photo}/>
                    <Text style={styles.title}>{name}</Text>
                </View>
                
            </TouchableHighlight>
        )
    }
}