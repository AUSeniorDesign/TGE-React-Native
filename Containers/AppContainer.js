import React, {Component} from 'react'
import {
    Button,
    ListView,
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native'
import { StackNavigator } from 'react-navigation' 

import {fetchItemsFromAPI}  from '../Redux/Actions'
import ItemDetail from '../Components/ItemDetail'
import Row from '../Components/Row'
import ItemListContainer from './ItemListContainer'
import FeaturedItemListContainer from './FeaturedItemListContainer'
import TabNavigator from 'react-native-tab-navigator';
import { ItemsStack } from '../Components/ItemsList'
import ItemListTab from './ItemListTab'


const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flex: 1
    },

}) 

export default class AppContainer extends Component {
    state= {
        selectedTab: 'itemsList'
    };

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'itemsList'}
                    title='Items'
                    onPress={() => this.setState({ selectedTab: 'itemsList' })}>
                    <ItemListTab/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'featuredList'}
                    title='Featured'
                    onPress={() => this.setState({ selectedTab: 'featuredList' })}>
                    <FeaturedItemListContainer/>
                </TabNavigator.Item>
            </TabNavigator>

        )
        
    }

}
