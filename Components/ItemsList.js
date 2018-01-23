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
import { connect } from 'react-redux'
import ItemDetail from '../Components/ItemDetail'
import Row from '../Components/Row'

let counter = 0

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flex: 1
    },

}) 

class ItemsList extends Component {
    static navigationOptions = {
        title: 'List',
    }

    constructor(props) {
        super(props)

        this.props.getItems()
    }
    
    _buttonPressed() {
        console.log('ButtonPressed')

      }

    render() {
        const { navigate } = this.props.navigation 

        const { items, isFetching } = this.props.items
        return(
            <ScrollView style={styles.container}>
                {
                    isFetching && <Text>Loading</Text>
                }
                {
                    
                    items.length ? (
                    items.map((item, index) => {
                        return(
                            <Row key={counter++} style={styles.row} {...item} navigate={navigate}/> 
                        )
                    })
                   ) : null
                }                
          </ScrollView>
        )
    }
}

export default ItemsList