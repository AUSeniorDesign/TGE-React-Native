/*
Created by: Harry Summers

FeaturedItemListContainer.js

Description:
The purpose of this file is to connect the FeaturedItemList
to Redux. This makes it so that whenever the property (mapped from state)
changes the FeaturedItemList is re-rendered.
*/

import FeaturedItemList from '../Components/FeaturedItemList'
import { connect } from 'react-redux'
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedItemList) 
