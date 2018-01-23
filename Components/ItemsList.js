import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    ListView
} from 'react-native'
import Row from '../Components/Row'

let counter = 0

export default class ItemsList extends Component {
    static navigationOptions = {
        title: 'List',
    }

    constructor(props) {
        super(props)

        this.state = {
            ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        }
    }

    componentWillMount() {
        this.props.getItems()
    }
    
    _buttonPressed() {
        console.log('ButtonPressed')

      }

      _renderRowData(navigate, rowData) {
        return <Row key={counter++} style={styles.row} name={rowData.name} image={rowData.image} navigate={navigate}/>
    }

    render() {
        const { navigate } = this.props.navigation 

        const { items, isFetching } = this.props.items

        const dataSource = this.state.ds.cloneWithRows(items)

        return(
          <View style={styles.container}>
                
                <ListView
                    renderRow={ (rowData, sectionID, rowID) => this._renderRowData(navigate, rowData) }
                    automaticallyAdjustContentInsets={ false }
                    enableEmptySections={ true }
                    style={ styles.container }
                    dataSource={ dataSource }
                />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

}) 