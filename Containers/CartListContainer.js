/*
Created by: Harry Summers

CartContainer.js

Description:
This file wires maps the state of the cart component to its properties 
so that anytime it changes the render method is called. The main 
function is to call the get cart items from the API. When they are received
they are rendered into the table.
*/

import CartList from '../Components/CartList'
import { connect } from 'react-redux'
import {fetchCartFromAPI}  from '../Redux/Actions'


function mapStateToProps(state) {
    return {
        cartItems: state.cartItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCart: () => dispatch(fetchCartFromAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList)