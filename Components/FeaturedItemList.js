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
            <FeaturedItemRow name={item.name} image={item.image} navigate={navigate}/>
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

