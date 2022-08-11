import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#7986cb',
    },

    body_container: {
        marginTop: 100,
        marginHorizontal: 20,
    },

    signInButton: {
        alignItems: 'center',
        marginTop: 10,
    },

    signUpButton: {
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
    },

    signUpTitle: {
        color: '#7986cb',
        fontSize: 18,
        fontWeight: 'bold',
    },

    signInTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine:'underline',
    },

    title: {
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 43,
    },

    subtitle: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '500',
    },
});