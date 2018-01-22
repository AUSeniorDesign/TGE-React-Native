import React, {Component} from 'react'
import {
    Button,
    ListView,
    View,
    StyleSheet,
    Text
} from 'react-native'
import { StackNavigator } from 'react-navigation' 
import { connect } from 'react-redux'
import {fetchItemsFromAPI}  from '../Redux/Actions'
import ItemDetail from '../Components/ItemDetail'
import Row from '../Components/Row'

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingLeft: 20,
        paddingTop: 20,
        flex: 1
    },
    row: {
        
    },
    
}) 

class AppContainer extends Component {

    static navigationOptions = {
        title: 'List',
    }

    constructor(props) {
        super(props)

        this.props.getItems()

        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) 
        // this.state = {
        //   dataSource: ds.cloneWithRows(items),
        // } 
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
            <View style={styles.container}>
                {
                    isFetching && <Text>Loading</Text>
                }
                {
                    
                    items.length ? (
                    items.map((item, index) => {
                        console.log("length: " + items.length)
                        return(
                            <Row style={styles.row} {...item}/> 
                        )
                    })
                   ) : null
                }
                
                
                
          </View>
        )
    }
}

// <ListView
//                     style={styles.container}
//                     dataSource={this.state.dataSource}
//                     renderRow={(data)  => {
//                     return <Row {...data}/>
//                     }}

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