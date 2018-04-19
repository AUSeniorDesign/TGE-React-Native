import React from 'react'
import { WebView } from 'react-native'
import styles from '../Style/CheckoutStyle'
import htmlBuilder from '../Model/htmlBuilder'
import {CHECKOUT_URL} from '../Utils/Constants'

export default class Checkout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {


        return(
            <WebView
            style={styles.container}
            source={{uri: CHECKOUT_URL}}/>
        )
    }
}