import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    TextInput,
   
} from "react-native"
export const Input = (props) => {
    return (
        <View>
            <TextInput
                style={[textStyles.input,{...props.style}]}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={(num) => props.onChangeText(num)}
                placeholderTextColor='#6D6A6A'
                secureTextEntry={props.secure ? true : false}
                editable={props.editable !== false}
            />
            {props.errorText ? <Text style={textStyles.error}>{props.errorText}</Text> : null}
        </View>
    );
};

const textStyles = StyleSheet.create({
    input: {
        borderColor: "#C4C4C4",
        color: "#000",
        borderRadius: 10,
        fontSize: 14,
        borderWidth: 1,
        paddingHorizontal: 10
    },
    error: {
        fontSize: 13,
        color: "#FA060D",
        paddingTop: 8
    }
});