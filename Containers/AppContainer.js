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




// const items = [{'name': 'Comic Book', url: 'http://media.comicbook.com/uploads1/2015/02/amazing-spider-man-136-cover-123891.jpg'},
//                 {'name': 'Action Figure', url: 'https://target.scene7.com/is/image/Target/21562552_Alt02?wid=328&hei=328&qlt=80&fmt=pjpeg'},
//                 {'name': 'Board Game', url: 'https://i.pinimg.com/736x/6c/18/65/6c1865c93124936ecdcc427b23bc0818--coming-out-board-games.jpg'},
//                 {'name': 'Playing Cards', url: 'https://i5.walmartimages.com/asr/df30dd27-3fd8-44df-a496-436e1e77c50a_1.7d17f2a87b309e098566be29ef33100c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'}] 

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingLeft: 20,
        paddingTop: 20,
        flex: 1
    },
    text: {
        textAlign: 'center'
    }
}) 

class AppContainer extends Component {

    static navigationOptions = {
        title: 'List',
    }

    constructor(props) {
        super(props)

        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) 
        // this.state = {
        //   dataSource: ds.cloneWithRows(items),
        // } 
    }
    
    _buttonPressed() {
        console.log('ButtonPressed')
        this.props.getItems()

      }

    render() {
        //const { navigate } = this.props.navigation 
        const { items, isFetching } = this.props.items
        console.log("Rendering AppContainer")
        console.log("items length: " + items.length)
        console.log("isFetching: " + isFetching)
        return(
            <View style={styles.container}>
                <Button
                    title={"Get Items"}
                    onPress={() => this._buttonPressed()}
                />
                {
                    isFetching && <Text>Loading</Text>
                }
                {
                    
                    items.length ? (
                    items.map((item, index) => {
                        console.log("length: " + items.length)
                        return(
                            <View>
                               <Text style={styles.text}>Name: {item.name}</Text>
                            </View>
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