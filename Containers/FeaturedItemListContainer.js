import FeaturedItemList from '../Components/FeaturedItemList'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
      items: state.items
    }
  }
  

function mapDispatchToProps(dispatch) {
    return {
        getItems: () => dispatch(fetchItemsFromAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedItemList) 
