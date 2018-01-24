import React from 'react' 
import { 
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  ScrollView} from 'react-native' 
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

  _buyPressed() {
    console.log('Buy Pressed')
  }

  render() {

    return (
        <ScrollView style={styles.container}>
          <View style={styles.viewCenter}>
            <Image source={{uri: this.image}} style={styles.photo}/>
          </View>
          <Text style={styles.titleText}>{this.name}</Text>
          <Text style={styles.subTitleText}>Item Price + Discount Info</Text>
          <View style={styles.viewCenter}>
            <TouchableHighlight style={styles.buttonView}  onPress={this._buyPressed} underlayColor={'#00E676'}>
            <Text style={styles.buyText}>Buy Now</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.titleText}>Item Description</Text>
          <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices, orci eget tincidunt lobortis, urna risus pretium sapien, sed posuere metus sapien eu eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam imperdiet eu purus in rutrum. </Text>
        </ScrollView>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    backgroundColor: '#C1C1C1',
    height: 300,
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    backgroundColor: '#00C853',
    height: 40,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
    
  },
  buyText: {
    color: 'white'
  },
  titleText: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 10,
    marginLeft: 20
  },
  subTitleText: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 10,
    marginLeft: 20,
    paddingBottom: 10
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionText: {
    marginLeft: 20,
    marginTop: 5
  }
}) 
