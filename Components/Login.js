/*
Created by: Harry Summers

Login.js

Description:
This class describes the login screen component. This is the first screen 
that the user will see when entering the application. The only option is to 
login using Facebook. This component integrates with the Facebnook API to 
create a user object to be added to the TGE database. When the user successfully
logs into the app they then automatically enter the application.
*/

import React, { Component } from 'react'
import {
    View, Text, Image, TextInput, TouchableHighlight, Alert
} from 'react-native'
import styles from '../Style/LoginStyle'
import loginImage from '../Images/logo.png'
import { BASE_URL } from '../Utils/Constants'
import {loginWithFacebook, getUsersMe} from '../Utils/network' 
import user from '../Utils/Globals'

export default class Login extends Component {

    componentWillMount() {
        const { navigate } = this.props.navigation 
        this._attemptAutoLogin(navigate)
    }
    static navigationOptions = {
        header: null
    }

    /*
        This button function is used for the admin login.
    */

    _loginPressed(navigate) {
        navigate('Content')
    }


    /*
        Opens up the Facebook window and prompts the user to login with their
        Facebook account. Then it creates the user in the TGE database.
    */

    async _logInFB(navigate) {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('325985624578151', {
            permissions: ['public_profile', 'email'],
          });
        if (type === 'success') {

        // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`)

            var res = await response.json()
            var name = res.name
            var id = res.id

            console.log('token' + token)

            request = loginWithFacebook(token)
            request
                .then(res => res.json())
                .then((json) => {
                console.log('response from facebook login:')
                console.log(json)
                console.log('success')
                
                navigate('Content')
            })
            .catch((err) => {
                console.log('failure' + err)
            })
            

        }
    }

    _attemptAutoLogin(navigate) {

        request = getUsersMe()
        request
            .then(res => res.json())
            .then((json) => {
                console.log('response from facebook login:')
                console.log(json)
                console.log('success')
                user.userId = json.id
                navigate('Content')
            })
            .catch((err) => {
                console.log('failure' + err)
            })

    }

    /*
        Adds the user with the Facebook data to the TGE database.
    */



    
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

            </View>
        )
    }
}

