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
export const Money = ({ navigation }) => {




    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={styles.text}>Money</Text>
                    <Text></Text>
                </View>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.topSec}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/bar.png")} style={styles.bar} />
                    </Pressable>
                    <Text style={[styles.text, { fontSize: 12 }]}>Payment Merchant</Text>
                </View>

                <View style={{width: '100%', alignSelf: "center", marginTop: 60}}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/war.png")} style={styles.war} />
                    </Pressable>
                    <Text style={styles.detail}>Quick Pay not enabled. After enabling, display code to cashier to quickly pay. </Text>

                    <View style={styles.midSec}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/cir.png")} style={styles.cir} />
                    </Pressable>
                    <Text style={[styles.text, { fontSize: 10, opacity: 0.3, marginLeft: 10 }]}>I have read and agree to the Payment User Service Agreement</Text>
                </View>
                <Button buttonText={"Enable now"} buttonWidth={150}/>
                </View>

            </View>

            <View style={styles.sectionContainer}>
                <View style={styles.switchContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/send.png")} style={styles.img} />
                        <Text style={styles.label}>My Post</Text>
                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={styles.m12} />
                </View>
                <View style={styles.switchContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/print.png")} style={styles.img} />
                        <Text style={styles.label}>Crads & Offers</Text>
                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={styles.m12} />
                </View>
                <View style={styles.switchContainer1}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/note.png")} style={styles.img} />
                        <Text style={styles.label}>Sticker Gallery</Text>
                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={styles.m12} />
                </View>
                <View style={styles.switchContainer1}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/transfer.png")} style={styles.img} />
                        <Text style={styles.label}>Sticker Gallery</Text>
                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={styles.m12} />
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