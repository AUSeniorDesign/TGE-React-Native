import React, {Component} from 'react'
import TabNavigator from 'react-native-tab-navigator';
import ItemListStack from './ItemListStack'
import FeaturedItemListStack from './FeaturedItemListStack'

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
                    <FeaturedItemListStack/>
                </TabNavigator.Item>
            </TabNavigator>

        )   
    }
}
