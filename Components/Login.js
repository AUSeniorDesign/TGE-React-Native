import React, { Component } from 'react'
import {
    View, Text, Image, TextInput, TouchableHighlight, Alert
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

    async _logInFB(navigate) {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('325985624578151', {
            permissions: ['public_profile'],
          });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`);
            console.log(token)
            navigate('Content')

        }
      }
    
    render() {
        const { navigate } = this.props.navigation 

        return(
            <View style={styles.container}>
                <View style={styles.viewCenter}>
                    <Image source={loginImage} style={styles.logo}/>
                </View>

                
                
                <View style={styles.viewCenter}>
                    <TouchableHighlight style={styles.buttonView}  onPress={() => this._logInFB(navigate)} underlayColor={'#afbdd4'}>
                    <Text style={styles.buyText}>Login with Facebook</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.viewCenter}>
                    <TouchableHighlight style={styles.buttonView}  onPress={() => this._loginPressed(navigate)} underlayColor={'#afbdd4'}>
                    <Text style={styles.buyText}>Admin Login</Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        )
    }
}

