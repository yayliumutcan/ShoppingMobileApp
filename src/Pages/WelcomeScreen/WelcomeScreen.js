import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, View, Image, ImageBackground} from 'react-native';
import styles from './WelcomeScreen.style';
const image = { uri: "https://reactjs.org/logo-og.png" };

function WelcomeScreen({navigation}){
    
    function handleLogin(){
        navigation.navigate('EnterScreen');
    }

    function handleCreate(){
        navigation.navigate('CreateScreen');
    }
    
    return(   
        <SafeAreaView style={styles.container}>
                <View>
                    <ImageBackground source={require('../../Assets/banner2.jpg')} resizeMode="cover" style={styles.banners}/>
                </View>
                <View style={styles.button_location}>
                    <TouchableOpacity style={styles.inner_button} onPress={handleLogin} >
                        <Text style={styles.button_title}>Sıgn In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inner_button} onPress={handleCreate} >
                        <Text style={styles.button_title}>Sıgn Up</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
};
export default WelcomeScreen;