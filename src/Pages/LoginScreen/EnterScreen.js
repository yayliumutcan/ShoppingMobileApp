import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import Input from '../../Components/Input/Input';
import styles from './EnterScreen.style';
import { usePost } from '../../Hooks/usePost/usePost';


import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";


function EnterScreen({ navigation }) {

    async function handleLogin(values) {
        try {
            await auth().signInWithEmailAndPassword(values.email, values.password)
            navigation.navigate('Events');
            showMessage({
                message: 'Başarıyla Giriş Yapıldı. ' + values.email,
                type: 'success',
            })
        }
        catch (error) {
            showMessage({
                message: 'Yanlış Kullanıcı Adı veya Şifre Girdiniz!',
                type: 'danger',
            })
            console.log(error);
        }
    }

    function onSelect() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.return}>
                <TouchableWithoutFeedback onPress={onSelect}>
                    <Image source={require('../../Assets/return.png')} resizeMode="contain" style={styles.image} tintColor="white" />
                </TouchableWithoutFeedback>
            </View>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleLogin}>
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginTop: 15, }}>E-Mail</Text>
                        <Input
                            placeholder='Enter Your E-Mail Address..'
                            value={values.email}
                            onType={handleChange('email')}
                        />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginTop: 15, }}>Password</Text>
                        <Input
                            placeholder='Enter Your Password..'
                            value={values.password}
                            onType={handleChange('password')}
                            style={{ marginBottom: 10, }}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.login}>Login</Text>
                        </TouchableOpacity>

                        <View style={styles.signInButton}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("CreateScreen")}
                            >
                                <Text style={styles.signInTitle}>Don't Have An Account? <Text style={{ color: 'white' }}>Sign Up</Text></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    );
}
export default EnterScreen;

