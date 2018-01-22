import React, {Component} from 'react'

import {
    Text,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flex: 1
    },

}) 

export default class FeaturedItemsList extends Component {
    render() {
        return (
            <Text style={styles.container}>Hello World</Text>
        )
    }
}