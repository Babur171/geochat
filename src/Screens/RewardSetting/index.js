import React, { useState } from "react"
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
} from "react-native"

import { styles } from "./styles";
export const RewardSetting = ({ navigation }) => {
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
                    <Text style={[styles.text, { fontSize: 20 }]}>Reward Settings</Text>
                    <Text></Text>
                </View>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Pressable>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/dorus.png")} style={styles.dorus} />
                </Pressable>
                <Text style={styles.text}>doris</Text>
            </View>
            <View style={styles.input}>
                <Input multiline={true} onChangeText={handleChange} backgroundColor={"#d6e5fd"} placeholder={"Add note"} />
            </View>
            <Text style={{ fontSize: 13, color: "#000", marginHorizontal: 15, marginVertical: 20 }}>Tap to change reward amount</Text>
            <View style={styles.secContainer}>
                <Text style={styles.rewardText}>1 &nbsp; &nbsp; &nbsp;CNY</Text>
                <Text style={styles.rewardText}>1  &nbsp; &nbsp;&nbsp;CNY</Text>
                <Text style={styles.rewardText}>1  &nbsp; &nbsp;&nbsp;CNY</Text>
            </View>
            <View style={[{ marginTop: 10 }, styles.secContainer]}>
                <Text style={styles.rewardText}>1 &nbsp; &nbsp; &nbsp;CNY</Text>
                <Text style={styles.rewardText}>1  &nbsp; &nbsp;&nbsp;CNY</Text>
                <Text style={styles.rewardText}>1  &nbsp; &nbsp;&nbsp;CNY</Text>
            </View>

            <Button buttonText={"Enable QR Code Rewards"} textColor={"#000"} buttonWidth={250} backgroundColor={"#D0A21D"} />

        </View>
    );
};




export const Button = params => {
    const backgroundColor = params.backgroundColor || "#000";
    const textColor = params.textColor || "#fff";
    const btnStyle = {
        backgroundColor: backgroundColor,
        width: params.buttonWidth || null
    };
    const btnText = {
        color: textColor
    };
    return (
        <View style={[buttonStyles.btnContainer, params.style]}>
            <View>
                <Pressable
                    style={[buttonStyles.btn, btnStyle]}
                    onPress={params.onPress}>
                    <Text style={[buttonStyles.btnText, btnText]}>
                        {params.buttonText}
                    </Text>
                    <View style={buttonStyles.childrenContainer}>{params.children}</View>
                </Pressable>
            </View>
        </View>
    );
};

const buttonStyles = StyleSheet.create({
    btnContainer: {
        justifyContent: "center", alignItems: "center", marginTop: 50
    },
    btn: {
        height: 50,
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    btnText: {
        color: "#fff",
        fontSize: 15,
    },
    childrenContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});

import {

    TextInput,

} from "react-native"
export const Input = (props) => {
    return (
        <View>
            <TextInput
                style={[textStyles.input, { ...props.style, textAlignVertical: props.multiline ? 'top' : 'center', backgroundColor: props?.backgroundColor || '#fff' }]}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={(num) => props.onChangeText(num)}
                placeholderTextColor='#6D6A6A'
                secureTextEntry={props.secure ? true : false}
                editable={props.editable !== false}
                multiline={props?.multiline || false}
                numberOfLines={props.multiline ? 5 : null}
            />
            {props.errorText ? <Text style={textStyles.error}>{props.errorText}</Text> : null}
        </View>
    );
};

const textStyles = StyleSheet.create({
    input: {

        color: "#000",

        fontSize: 14,
        paddingHorizontal: 10
    },
    error: {
        fontSize: 13,
        color: "#FA060D",
        paddingTop: 8
    }
});