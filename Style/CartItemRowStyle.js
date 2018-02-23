import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    photo: {
        backgroundColor: '#C1C1C1',
        height: 50,
        width: 50,
      },
    nameText: {
        paddingLeft: 10,
        paddingRight: 10
    },
    priceText: {
        paddingTop: 5,
        paddingLeft: 10,
        fontWeight: 'bold',
    }
})