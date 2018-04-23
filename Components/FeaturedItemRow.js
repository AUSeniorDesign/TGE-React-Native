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
import {BASE_URL} from '../Utils/Constants'

export default class FeaturedItemRow extends React.Component {



    render() {

        const image = BASE_URL + this.props.item.image
        const description = this.props.item.description
        const store = this.props.item.store
        const date = this.props.item.createdAt

        var jsDate = new Date(date)
        var formattedDate = jsDate.toLocaleDateString("en-US")
        console.log(this.props.item)
        return(
            <TouchableHighlight underlayColor={'#BDBDBD'} style={styles.container}> 
                <View style={styles.viewCenter}>
                    
                    <Text style={styles.title}>{store} - {formattedDate}</Text>
                    <Image source={{uri: image}} style={styles.photo}/>
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.line}/>
                </View>
                
            </TouchableHighlight>
        )
    }
}