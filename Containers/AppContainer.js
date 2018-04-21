/*
Created by: Harry Summers

AppContainer.js

Description:
The purpose of this container is to define the tab navigation for the main screen
of the application. The first tab will display the component with the grid and the
second tab will display the component with the Instagram view. They, however, do not
load the views directly, but instead they load the container for them to enable navigation.
*/


import React, {Component} from 'react'
import TabNavigator from 'react-native-tab-navigator';
import ItemListStack from './ItemListStack'
import FeaturedItemListContainer from './FeaturedItemListContainer'

export default class AppContainer extends Component {
    state= {
        selectedTab: 'itemsList'
    };
    static navigationOptions = {
        header: null
    }

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
                    <ItemListStack/>
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
