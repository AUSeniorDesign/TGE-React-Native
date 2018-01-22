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
import FeaturedItemList from '../Components/FeaturedItemList'
import TabNavigator from 'react-native-tab-navigator';


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
        //const { navigate } = this.props.navigation 

        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'itemsList'}
                    title='Items'
                    onPress={() => this.setState({ selectedTab: 'itemsList' })}>
                    <ItemListContainer/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'featuredList'}
                    title='Featured'
                    onPress={() => this.setState({ selectedTab: 'featuredList' })}>
                    <FeaturedItemList/>
                </TabNavigator.Item>
            </TabNavigator>

        )
        
    }

}
