import React from 'react';
import { SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native';
import Input from '../../Components/Input/Input';
import styles from './CreateScreen.style';

import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';

function CreateScreen({ navigation }) {

    function handleLogin(values) {
        console.log(values);
        navigation.navigate('EnterScreen');
        console.log(values.email);
        auth().createUserWithEmailAndPassword(values.email, values.password)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <SafeAreaView style={styles.container}>
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
                        <View style={styles.signUpButton}>
                            <TouchableOpacity
                                onPress={handleSubmit}
                            >
                                <Text style={styles.signUpTitle}>Create Account</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.signInButton}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("EnterScreen")}
                            >
                                <Text style={styles.signInTitle}>Already Have An Account?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>

        </SafeAreaView>
    );
}
export default CreateScreen;

