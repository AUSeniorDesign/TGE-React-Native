import React from 'react' 
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native' 
import { StackNavigator } from 'react-navigation' 
import ItemDetail from './ItemDetail'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  photo: {
    backgroundColor: '#C1C1C1',
    height: 100,
    width: 100
  },
})  

class Row extends React.Component {
  constructor(props) {
    super(props) 
  }

  _rowPressed() {
    //this.props.navigate('Detail', this.props) 
  }

  render() {

    return (
      <TouchableHighlight style={styles.container} onPress={() => this._rowPressed()}>
      <View> 
          <Image source={{uri: this.props.url}} style={styles.photo}/>
  
          <Text style={styles.text}>
          {`${this.props.name}`}
          </Text>
      </View>
  
    </TouchableHighlight>
    )
  }
}


export default Row 