import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    FlatList
} from 'react-native'
import Row from '../Components/Row'
import styles from '../Style/ItemListStyle'

let counter = 0

export default class ItemsList extends Component {
    static navigationOptions = {
        title: 'List',
    }

    constructor(props) {
        super(props)

       
    }

    componentWillMount() {
        this.props.getItems()
    }
    
    _buttonPressed() {
        console.log('ButtonPressed')

      }

      _renderRowData(navigate, item) {
        return <Row key={counter++} style={styles.row} name={item.name} image={item.image} navigate={navigate}/>
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
                    renderItem={(rowData) => this._renderRowData(navigate, rowData.item)}
                />
          </View>
        )
    }
}

