import { connect } from 'react-redux'
import ItemsList from '../Components/ItemsList'
import {fetchItemsFromAPI}  from '../Redux/Actions'

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

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList) 
