import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from './ProductCard.style';

function ProductCard({ product, onSelect }) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: product.image }} resizeMode='contain' />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} TL</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
}
export default ProductCard;

