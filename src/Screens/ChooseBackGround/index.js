import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    Switch,

} from "react-native"

import { styles } from "./styles";
export const ChooseBackGround = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <View style={[styles.inputText, { paddingHorizontal: 20, paddingVertical: 10 }]}>
                <Pressable><Image source={require(
                    // @ts-ignore
                    "../../Assets/back.png")} style={styles.m12} />
                </Pressable>
                <Text style={{ fontSize: 17, color: "#000" }}>Background</Text>
                <Text />
            </View>

            <View style={styles.sectionContainer}>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Choose a wallpaper</Text>
                    <Image source={require(
                    // @ts-ignore
                    "../../Assets/next.png")} style={styles.m12} />
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Choose Photo</Text>
                    <Image source={require(
                    // @ts-ignore
                    "../../Assets/next.png")} style={styles.m12} />
                </View>
                <View style={styles.switchContainer1}>
                    <Text style={styles.label}>Take Photo</Text>
                    <Image source={require(
                    // @ts-ignore
                    "../../Assets/next.png")} style={styles.m12} />
                </View>
            </View>

        </View>
    );
};

