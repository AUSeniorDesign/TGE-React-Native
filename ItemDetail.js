import React from 'react';
import { 
  AppRegistry, 
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View} from 'react-native';
  import { StackNavigator } from 'react-navigation';


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
  });

export default class ItemDetail extends React.Component {
    static navigationOptions = {
        title: 'Detail',
      }
      
  constructor(props) {
    super(props);
  }
  render() {

    return (
        <View style={styles.container}>
          <Text>{`${this.props.navigation.state.params.name}`}</Text>
        </View>
    );
  }
}

