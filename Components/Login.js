import React, { Component } from 'react'
import {
    View, Text, Button, Image
} from 'react-native'
import styles from '../Style/LoginStyle'
import loginImage from '../Images/logo.png'

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }

    _loginPressed(navigate) {
        navigate('Content')
    }
    
    render() {
        const { navigate } = this.props.navigation 

        return(
            <View style={styles.container}>
                <Image />
                <Button
                    title='Login'
                    onPress={() => this._loginPressed(navigate)}
                />
            </View>
        )
    }
}

