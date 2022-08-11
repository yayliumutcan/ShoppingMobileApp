import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';



function BasketScreen ({route}) {

    const { id } = route.params;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const URL = 'https://fakestoreapi.com/products/' + id;
    
    useEffect(() => {
        fetchdata();
    }, []);


    const fetchdata = async () => {
        try {
            const { data: productData } = await axios.get(URL);
            setData(...data, productData);
            setLoading(false);
        } catch (error) {
            console.log('hata var');
            setLoading(false);
        }
    };


    return(

        <ScrollView>
            <View>
                <Text>{data.title}</Text>
                <Text>Product Description</Text>
                <View></View>
                <Text>{data.description}</Text>
                <View>
                   <Text>{data.price} TL</Text>            
                </View>
            </View>
        </ScrollView>
    );
    
    
}
export default BasketScreen;