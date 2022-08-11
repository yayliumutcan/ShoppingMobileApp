import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        paddingBottom:40,
        backgroundColor: 'white',
        padding:10
    },
    
    basket_container:{
        marginHorizontal:20,
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    basketTitle:{
        fontSize:18,
        fontWeight:'700',
        color:'white',
    },

    inner_container: {
        paddingTop: 40,
    },

    basketButton:{
        backgroundColor:'darkgreen',
        padding:8,
        borderRadius:20,
    },

    image: {
        alignItems: 'center',
        height: 300,
    },
    title: {
        fontSize: 30,
        paddingTop: 15,
        color: 'black',
        fontWeight: '600',
    },

    price: {
        marginTop:4,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },

    body_container: {
        paddingLeft: 15,
    },

    subdescript: {
        paddingTop: 10,
    },

    underline: {
        borderTopWidth: 2,
        borderColor: 'darkgray',
        width: 130,
    },

    description: {
        paddingTop: 5,
        fontSize: 16,
        color: 'black',
    },

});