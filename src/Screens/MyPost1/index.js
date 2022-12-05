import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
} from "react-native"

import { styles } from "./styles";
export const MyPost1 = ({ navigation }) => {




    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "#BBD3FB" }}>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={styles.text}>My Post</Text>
                    <Text></Text>
                </View>

            </View>

            <Text style={{fontSize: 15, color: "#000", opacity: 0.3, alignSelf: "center", top: '40%'}}>No Time Capsule</Text>
            
        </View>
    );
};

