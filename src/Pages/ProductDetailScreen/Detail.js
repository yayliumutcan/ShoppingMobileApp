import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { showMessage } from "react-native-flash-message";
import styles from './Detail.style';
import { NavigationHelpersContext } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


function Detail({ route, navigation }) {
    const { id } = route.params;
    const [data, setData] = useState([]);
    const URL = 'https://fakestoreapi.com/products/' + id;
    const DeviceSize = Dimensions.get('window');

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const { data: productData } = await axios.get(URL);
            setData(productData);
        } catch (error) {
            console.log('hata var');
        }
    };


    function onSelect() {
        navigation.goBack();
    }

    function handleAdd() {
        /*navigation.navigate('BasketScreen', { id })*/

        showMessage({
            message: 'Ürün Sepetinize Eklendi.',
            type: 'success',
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={onSelect}>
                    <Image source={require('../../Assets/return.png')} resizeMode="contain" style={{ height: 30 }} tintColor="black" />
                </TouchableWithoutFeedback>
                <View style={styles.inner_container}>
                    <Image style={styles.image} source={{ uri: data.image }} resizeMode='contain' />
                </View>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.subdescript} >Product Description</Text>
                    <View style={styles.underline}></View>
                    <Text style={styles.description}>{data.description}</Text>
                    <View style={styles.basket_container}>
                        <TouchableOpacity style={styles.basketButton}
                            onPress={handleAdd}
                        >
                            <Text style={styles.basketTitle}>Add To Basket</Text>
                        </TouchableOpacity>
                        <Text style={styles.price}>{data.price} TL</Text>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Detail;