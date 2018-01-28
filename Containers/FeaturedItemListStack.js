import ItemDetail from '../Components/ItemDetail'
import FeaturedItemListContainer from './FeaturedItemListContainer'
import { StackNavigator } from 'react-navigation' 


export default StackNavigator({
    List: {
      screen: FeaturedItemListContainer,
    },
    Detail: {
      screen: ItemDetail,
    },
  }
);
  

