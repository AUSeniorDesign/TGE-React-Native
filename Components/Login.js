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
            permissions: ['public_profile','email'],
          });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`)

            var res = await response.json()
            // var name = `${(await response.json()).name}`
            // var id = `${(await response.json()).id}`
            var email = 'hsummers96@gmail.com'
            var name = res.name
            var id = res.id

            console.log(name)
            console.log(id)
            console.log(email)

            this._createUser(id, name, token, email)
            
        }
    }

    _createUser(facebookId, name, token, email) {

        
        //    {"facebook":{"facebookId":"123456789","name":"Haven Barnes","token":"abcdefghijkXYZ_123"}}
        var body = {
            "facebook": {
                "facebookId": facebookId,
                "name": name,
                "token": token,
            }
        }
        fetch('http://172.20.10.7:3000/users/create/facebook', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => console.log(res.json()))
            .then(() => console.log('success'))
            .catch(err => console.log('failure' + err))
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

