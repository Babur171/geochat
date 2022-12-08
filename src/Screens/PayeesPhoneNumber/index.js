import React, { useState } from "react"
import {
    View,
    Text,
    Pressable,
    Image,
    TextInput,
} from "react-native"

import { styles } from "./styles";
export const PayeesPhoneNumber = ({ navigation }) => {
    const [value, setValue] = useState('');

    const handleChange = (num) => {
        setValue(num)
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text />
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/blackDots.png")} style={styles.dots} />
                    </Pressable>
                </View>
            </View>

            <Text style={styles.text}>Enter Payee’s  mobile number</Text>
            <Text style={[styles.text, { fontSize: 13 }]}>Confirm with the Payee the number linked to their, GeoChat
                aacount, then just enter their mobile number to transfer
                money</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    // value={searchText}
                    onChangeText={(text) => handleChange(text)}
                    placeholder='Mobile Number'
                    placeholderTextColor={"#8091ad"}
                    style={{ fontSize: 15 }}
                />
            </View>


        </View>
    );
};
