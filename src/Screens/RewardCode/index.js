import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
} from "react-native"

import { styles } from "./styles";
export const RewardCode = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={styles.text}>Reward Code</Text>
                    <Text></Text>
                </View>
            </View>

            <View style={styles.mainContainer}>

                <View style={styles.subSec}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/war.png")} style={styles.war} />
                    </Pressable>
                    <Text style={styles.detail}>QR Code Reward disabled. When enabled, Users can scan QR
                        code to give rewards</Text>
                    <Button buttonText={"Enable QR Code Rewards"} textColor={"#000"} buttonWidth={200} backgroundColor={"#D0A21D"} />
                </View>

            </View>

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
        justifyContent: "center", alignItems: "center", marginTop: 20
    },
    btn: {
        width: 100,
        height: 50,
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    btnText: {
        color: "#fff",
        fontSize: 10,
    },
    childrenContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});