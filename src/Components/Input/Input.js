import React from "react";
import {TextInput} from 'react-native';
import styles from './Input.style';

function Input ({placeholder, value, onType}) {
    return(
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={'white'}
                selectionColor={'white'}
                onChangeText={onType}
                value={value}
            />
    );

};
export default Input;

