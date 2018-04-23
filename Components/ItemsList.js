/*
Created by: Harry Summers

ItemsList.js

Description:
This is the component that the user will see first if they have already logged 
into the app. This component will display all the items in the TGE database in a grid.
The user can then click on one and view their details. The items state is mapped to props
(see ItemListContainer) and requests the items from the api in the componentsWillMount().
*/


import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    FlatList
} from 'react-native'
import ItemListTile from '../Components/ItemListTile'
import styles from '../Style/ItemListStyle'
import {getUsersMe} from '../Utils/network'

export default class ItemsList extends Component {
    static navigationOptions = {
        title: 'For Sale',
    }


    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getItems()

    }
    
    /*
        Renders the tile for the specific item.
    */
    _renderTile(navigate, item) {
        return <ItemListTile style={styles.row} item={item} navigate={navigate}/>
    }



    // CHANGE THIS WHEN I GET ID
    _keyExtractor = (item, index) => item.name

    render() {
        const { navigate } = this.props.navigation 

        const { items } = this.props.items


        return(
          <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={items}
                    numColumns={2}
                    renderItem={(rowData) => this._renderTile(navigate, rowData.item)}
                />
          </View>
        )
    }
}
