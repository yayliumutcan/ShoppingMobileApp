import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#545d8e',
    },
    
    return:{
        marginLeft:5,
        marginTop:10,
    },

    login:{
        flex:1,
        fontSize:21,
        fontWeight:'bold',
        color:'#7986cb',
        textAlign:'center',
        justifyContent:'center',
        paddingTop:2,
        
    },

    button:{
        height:35,
        alignItems:'center',
        backgroundColor:'white',
    },

    body_container: {
        flex:1,
        justifyContent:'center',
        marginHorizontal: 20,
        marginBottom:60,
    },
    signUpButton:{
        alignItems:'center',
        paddingTop:10,
    },
    signUpTitle:{
        color:'white',
        textDecorationLine:'underline',      
    },
    title: {
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 43,
    },

    signInTitle: {
        color: '#e8e8e8',
        fontSize: 16,
        fontWeight: '500',
    },

    signInButton: {
        alignItems: 'center',
        marginTop: 10,
    },


    subtitle: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '500',
    },

    image:{
        height:30,
    },

});