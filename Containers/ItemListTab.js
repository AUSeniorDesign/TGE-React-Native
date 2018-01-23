import ItemDetail from '../Components/ItemDetail'
import ItemListContainer from './ItemListContainer'
import { StackNavigator } from 'react-navigation' 


export default StackNavigator({
    List: {
      screen: ItemListContainer,
    },
    Detail: {
      screen: ItemDetail,
    },
  });
  

