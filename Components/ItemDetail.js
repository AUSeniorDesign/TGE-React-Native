import React from 'react' 
import { 
  StyleSheet,
  Text,
  Image,
  View} from 'react-native' 
import { StackNavigator } from 'react-navigation' 




export default class ItemDetail extends React.Component {
    static navigationOptions = {
        title: 'Detail',
      }
      
  constructor(props) {
    super(props) 
    this.name = this.props.navigation.state.params.name
    this.image = this.props.navigation.state.params.image
  }
  render() {

    return (
        <View style={styles.container}>
          <Image source={{uri: this.image}} style={styles.photo}/>
          <Text>{this.name}</Text>
        </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  photo: {
    backgroundColor: '#C1C1C1',
    height: 300,
    width: 300,
    marginTop: 20,
    marginBottom: 20
  },
}) 
