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
        this.props.getFeed()
    }

    _buttonPressed() {
        console.log('ButtonPressed')

    }

    _renderRowData(item) {
        return (
            <FeaturedItemRow item={item} />
        )
    }

    // CHANGE THIS WHEN I GET ID
    _keyExtractor = (item, index) => item.id

    render() {
        const { feedItems } = this.props.feedItems

        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={feedItems}
                    renderItem={(rowData) => this._renderRowData(rowData.item)}
                />
            </View>
        )
        
    }
}

