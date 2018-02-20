/*
Created by: Harry Summers

ItemListTile.js

Description:
This component renders the view for the tile containing the TGE item.
The component displays the image and title for the item. The properties
that the component needs is listed in the propTypes at the bottom of the file.
When the row is selected the detail of the item is displayed.
*/


import React from 'react' 
import { View, Text, Image, TouchableHighlight } from 'react-native' 
import PropTypes from 'prop-types'
import styles from '../Style/ItemListTileStyle'

export default class ItemListTile extends React.Component {
  constructor(props) {
    super(props) 
  }

  /*
    Navigates to the detail screen when the row was selected
  */
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
  /* Needed for navigating to the detail screen */
  navigate: PropTypes.any.isRequired,

  /* The name of the item to be displayed in the row */ 
  name: PropTypes.string.isRequired,

  /* The image to be displayed for the item. */
  image: PropTypes.string.isRequired
}

