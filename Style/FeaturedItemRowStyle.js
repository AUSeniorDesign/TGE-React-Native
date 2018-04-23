import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    photo: {
        width: '90%',
        height: 500,

    },
    viewCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        paddingTop: 10,
        paddingBottom: 20,
        fontSize: 20,
    },
    description: {
        paddingTop: 5,
        fontSize: 14,
        textAlign: 'left',
        paddingLeft: 10,
        paddingRight: 10
    },
    line: {
        margin: 20,
        backgroundColor: 'gray',
        height: 1,
        width: '100%'
    }
}) 