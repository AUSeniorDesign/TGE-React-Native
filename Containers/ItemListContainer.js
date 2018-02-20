/*
Created by: Harry Summers

ItemListContainer.js

Description:
This is the container for the ItemList component. The main role of the 
container is to wire up Redux functionality. It maps the state of items
to the properties of the ItemsList so that anytime the props change
it will re-render the component.
*/

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

