import React from "react";
import { View, StyleSheet, TextInput, Image } from 'react-native';
import styles from './SearchBar.style';

function SearchBar(props) {
    return (
        <View style={styles.container}>
            <Image source={require('../../Assets/search.png')} resizeMode="contain" style={{height:10, paddingTop:40, marginLeft:10,}} tintColor="#7986cb" />
            <TextInput
                style={styles.input}
                placeholder='Search Products Name'
                placeholderTextColor={'#7986cb'}
                selectionColor={'#7986cb'}
                onChangeText={props.onSearch}
            />
        </View>
    );
}
export default SearchBar;

