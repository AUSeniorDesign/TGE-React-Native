import React from 'react' 
import { 
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  FlatList} from 'react-native' 
import { StackNavigator } from 'react-navigation' 
import styles from '../Style/CartListStyle'

export default class CartList extends React.Component {

    constructor(props) {
        super(props)
    }

    _renderRowData(data) {
        return <Text>Really</Text>
    }

    _keyExtractor = (item, index) => item.name

    render() {
        const items = [
            "Comic Book",
            "Action Figure",
            "X-Men Lunchbox"
        ]
        return(
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={items}
                    renderItem={(rowData) => this._renderRowData(rowData)}
                />
            </View>
        )
    }
}