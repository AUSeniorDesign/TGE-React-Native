import React from 'react' 
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native' 
import PropTypes from 'prop-types'
import styles from '../Style/ItemListTileStyle'

export default class ItemListTile extends React.Component {
  constructor(props) {
    super(props) 
  }

  _rowPressed() {
    this.props.navigate('Detail', this.props) 
  }

  render() {

    return (
      <TouchableHighlight underlayColor={'#C1C1C1'} style={styles.container} onPress={() => this._rowPressed()}>
        <View> 
          <View style={styles.viewCenter}>
            <Image source={{uri: this.props.image}} style={styles.photo}/>
          </View>
    
            <Text style={styles.text}>
            {`${this.props.name}`}
            </Text>
        </View>
  
    </TouchableHighlight>
    )
  }
}

ItemListTile.propTypes = {
  navigate: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

