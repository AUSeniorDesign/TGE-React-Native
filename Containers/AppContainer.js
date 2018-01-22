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
import {fetchItemsFromAPI}  from '../Redux/Actions'
import ItemDetail from '../Components/ItemDetail'
import Row from '../Components/Row'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flex: 1
    },

}) 

let counter = 0

class AppContainer extends Component {

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
        //const { navigate } = this.props.navigation 
        const { items, isFetching } = this.props.items
        console.log("Rendering AppContainer")
        console.log("items length: " + items.length)
        console.log("isFetching: " + isFetching)
        return(
            <ScrollView style={styles.container}>
                {
                    isFetching && <Text>Loading</Text>
                }
                {
                    
                    items.length ? (
                    items.map((item, index) => {
                        console.log("length: " + items.length)
                        return(
                            <Row key={counter++} style={styles.row} {...item}/> 
                        )
                    })
                   ) : null
                }
                
                
                
          </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
      items: state.items
    }
  }
  

function mapDispatchToProps(dispatch) {
    return {
        getItems: () => dispatch(fetchItemsFromAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer) 

// const TGEApp = StackNavigator({
//     List: { screen: AppContainer },
//     Detail: { screen: ItemDetail },
//   }) 

//export default TGEApp

//export default AppContainer