import React, {Component} from 'react'
import {
    StyleSheet,
} from 'react-native'
import FeaturedItemListContainer from './FeaturedItemListContainer'
import TabNavigator from 'react-native-tab-navigator';
import ItemListTab from './ItemListTab'

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


const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flex: 1
    },

}) 