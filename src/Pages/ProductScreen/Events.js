import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import axios from 'axios';
import ProductCard from '../../Components/Card/ProductCard';
import SearchBar from '../../Components/SearchBar/SearchBar'
import styles from './Events.style';

function Events({ navigation }) {
    const [data, setData] = useState(data);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const URL = 'https://fakestoreapi.com/products'
    
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const { data: productData } = await axios.get(URL);
            setData(productData);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" />;
    }
    if (error) {
        return <Text style={styles.errorText}>Hata 404</Text>;
    }






    
    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => productselected(item.id)} />;

    const productselected = id => {
        navigation.navigate('Detail', { id });
    };

    const handleSearch = text => {
        const filteredList = data.filter(product => {
            const searchedText = text.toLowerCase();
            const currenTitle = product.title.toLowerCase();
            console.log(searchedText);
            return currenTitle.indexOf(searchedText) > -1;
        });
        setData(filteredList)

    };
    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('../../Assets/bg2.jpg')} resizeMode="cover" style={styles.image}>
                <View>
                    <SearchBar
                        onSearch={handleSearch}
                    />
                </View>
                <FlatList
                    data={data}
                    renderItem={renderProduct}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}
export default Events;

