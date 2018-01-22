import React from 'react' 
import { 
  AppRegistry, 
  StyleSheet
  } from 'react-native' 

  import Row from './Components/Row' 
  import ItemDetail from './Components/ItemDetail'
  import { StackNavigator } from 'react-navigation' 
  import { Provider } from 'react-redux'
  import configureStore from './Redux/ConfigureStore'
  import AppContainer from './Containers/AppContainer' 

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
          <AppContainer/>
        </Provider>
    ) 
  }

}

// const TGEApp = StackNavigator({
//   List: { screen: AppContainer },
//   Detail: { screen: ItemDetail },
// }) 

// export default TGEApp
