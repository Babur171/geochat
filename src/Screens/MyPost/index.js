import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    TouchableOpacity,
} from "react-native"

import { styles } from "./styles";
export const MyPost = ({ navigation }) => {

    const [selected1, setSelected1] = useState(false);
    const [selected, setSelected] = useState(true);
    const handleChange1 = async (text) => {
        setSelected(true)
        setSelected1(false)
    }

    const handleChange2 = async (text) => {
        setSelected(false)
        setSelected1(true)
    }



    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "#BBD3FB" }}>
                <View style={styles.header}>
                    <Pressable onPress={()=>navigation.goBack()}><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={{ fontSize: 15, color: "#000", textAlign: "center" }}>My Post</Text>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/bars.png")} style={styles.bars} />
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Pressable style={{ paddingVertical: 10, borderBottomWidth: selected ? 2 : 0, borderBottomColor: "#28D757", width: "50%" }} onPress={() => handleChange1()}>
                        <Text style={{ fontSize: 15, color: "#000", textAlign: "center" }}>Moments</Text>
                    </Pressable>
                    <Pressable style={{ paddingVertical: 10, borderBottomWidth: selected1 ? 2 : 0, borderBottomColor: "#28D757", width: "50%" }} onPress={() => handleChange2()}>
                        <Text style={{ fontSize: 15, color: "#000", textAlign: "center" }}>Status</Text>
                    </Pressable>
                </View>

            </View>
            {
                selected1 &&
                <TouchableOpacity style={styles.sectionContainer1} onPress={()=>navigation.navigate("MyPost1")}>
                    <View style={styles.switchContainer}>
                        <Text style={styles.label}>Time Capsule History</Text>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/next.png")} style={styles.m12} />
                    </View>
                </TouchableOpacity>
            }
        </View>
    );
};

