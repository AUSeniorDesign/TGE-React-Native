import React from 'react' 
import { 
  AppRegistry, 
  StyleSheet
  } from 'react-native' 

  import { StackNavigator } from 'react-navigation' 
  import { Provider } from 'react-redux'
  import configureStore from './Redux/ConfigureStore'
  import AppContainer from './Containers/AppContainer' 
  import ItemDetail from './Components/ItemDetail'
  import AppStack from './Containers/AppStack'

const store = configureStore()

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
}) 

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <AppStack/>
        </Provider>
    ) 
  }

}
