import React from 'react'
import { WebView } from 'react-native'
import styles from '../Style/CheckoutStyle'
import htmlBuilder from '../Model/htmlBuilder'
import {BASE_URL} from '../Utils/Constants'

export default class Checkout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const checkoutUrl = BASE_URL + "square"
        return(
            <WebView
            style={styles.container}
            source={{uri: checkoutUrl}}/>
        )
    }
}