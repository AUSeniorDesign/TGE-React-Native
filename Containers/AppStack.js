import { StackNavigator } from 'react-navigation' 
import Login from '../Components/Login'
import AppContainer from './AppContainer'

export default StackNavigator({
    Login: {
      screen: Login,
    },
    Content: {
      screen: AppContainer,
    },
  },

);
  

