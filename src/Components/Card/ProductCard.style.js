import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        backgroundColor: '#e0f7fa',
        margin: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'white',
    },

    body_container: {
        flex: 1,
        padding: 5,
        borderRadius: 7,
    },

    title: {
        fontSize: 17,
        fontWeight: '600',
        color: 'black',
    },

    price: {
        textAlign: 'right',
        marginTop: 50,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },

    image: {
        width: 100,
        minHeight: 100,
        backgroundColor: 'white',
        borderRadius: 7,
    },
});