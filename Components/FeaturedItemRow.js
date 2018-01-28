import React from 'react'
import { TouchableHighlight, Image, Text, View } from 'react-native';
import styles from '../Style/FeaturedItemRowStyle'


export default class FeaturedItemRow extends React.Component {

    _rowPressed() {
        this.props.navigate('Detail', this.props) 
    }

    render() {
        return(
            <TouchableHighlight underlayColor={'#BDBDBD'} style={styles.container} onPress={() => this._rowPressed()}> 
                <View style={styles.viewCenter}>
                    <Image source={{uri: this.props.image}} style={styles.photo}/>
                    <Text style={styles.title}>{this.props.name}</Text>
                </View>
                
            </TouchableHighlight>
        )
    }
}