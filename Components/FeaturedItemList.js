/*
Created by: Harry Summers

FeaturedItemList.js

Description:
This class renders the component for the featured items in the app.
A list of instagram-like images are displayed and can be scrolled through.
The component is connected to redux and the when the items array changes
the component is re-rendered.
*/

import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    FlatList,
    View
} from 'react-native'
import FeaturedItemRow from './FeaturedItemRow'
import styles from '../Style/FeaturedItemListStyle'


export default class FeaturedItemsList extends Component {
    componentWillMount() {
        this.props.getItems()
    }

    _buttonPressed() {
        console.log('ButtonPressed')

    }

    _renderRowData(navigate, item) {
        return (
            <FeaturedItemRow item={item} navigate={navigate}/>
        )
    }

    // CHANGE THIS WHEN I GET ID
    _keyExtractor = (item, index) => item.name

    render() {
        const { navigate } = this.props.navigation 

        const { items } = this.props.items

        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={items}
                    renderItem={(rowData) => this._renderRowData(navigate, rowData.item)}
                />
            </View>
        )
        
    }
}

