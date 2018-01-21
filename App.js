import React from 'react';
import { 
  AppRegistry, 
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View, 
  Button} from 'react-native';

  import Row from './Row';
  import ItemDetail from './ItemDetail'
  import { StackNavigator } from 'react-navigation';

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });

const items = [{'name': 'Comic Book', url: 'http://media.comicbook.com/uploads1/2015/02/amazing-spider-man-136-cover-123891.jpg'},
                {'name': 'Action Figure', url: 'https://target.scene7.com/is/image/Target/21562552_Alt02?wid=328&hei=328&qlt=80&fmt=pjpeg'},
                {'name': 'Board Game', url: 'https://i.pinimg.com/736x/6c/18/65/6c1865c93124936ecdcc427b23bc0818--coming-out-board-games.jpg'},
                {'name': 'Playing Cards', url: 'https://i5.walmartimages.com/asr/df30dd27-3fd8-44df-a496-436e1e77c50a_1.7d17f2a87b309e098566be29ef33100c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'}];

class App extends React.Component {
  
  static navigationOptions = {
    title: 'List',
  }
  
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(items),
    };
  }
  
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data)  => {
            return <Row {...data} navigate={navigate}/>
          }}
        />
      </View>
    );
  }

}
const TGEApp = StackNavigator({
  List: { screen: App },
  Detail: { screen: ItemDetail },
});


export default TGEApp;