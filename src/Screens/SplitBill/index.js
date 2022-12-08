import { createEntityAdapter } from "@reduxjs/toolkit";
import React, { useState } from "react"
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
} from "react-native"

import { styles } from "./styles";
export const SplitBill = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text />
                    <Text></Text>
                </View>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Pressable>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/greenbars.png")} style={styles.dorus} />
                </Pressable>
                <Text style={[styles.text, { fontSize: 20 }]}>Split Bill</Text>
            </View>

            <Text style={styles.desc}>After requesting payment via chat, received funds will be
                deposited in Balance </Text>

            <View style={styles.bottom}>
                <Button buttonText={"Select Chat"} textColor={"#000"} buttonWidth={200} backgroundColor={"#3FD21A"} />
                <Text style={styles.bottomText}>my split bill history</Text>
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

