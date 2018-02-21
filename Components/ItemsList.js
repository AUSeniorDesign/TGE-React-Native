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
        return <ItemListTile style={styles.row} name={item.name} image={this._getFirstImage(item.images)} navigate={navigate}/>
    }

    /*
        This method returns the first image in the list of images 
        that each item contains so that it can be displayed in the list.
    */

    _getFirstImage(images) {
        if (images != "") {
            return images.split(',')[0]
        } else {
            return 'https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png/revision/latest?cb=20170219125728'
        }
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
