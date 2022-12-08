import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    ImageBackground,
    TextInput,
    StyleSheet,
} from "react-native"

import { styles } from "./styles";
export const PhoneVerification = ({ navigation }) => {

    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const handleChange = async (text) => {
        setValue(text)
    }



    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/signup.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={[styles.header]}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/back.png")} style={styles.back} />
                    </Pressable>
                    <Text style={{ fontSize: 20, color: "#000" }}>Phone Verification</Text>
                    <Text>Next</Text>
                </View>
                <Text style={{ fontSize: 13, color: "#000", paddingHorizontal: 15, paddingVertical: 20, lineHeight: 17 }}>If  you change your phone number, you can log in with the new one.
                    Your current phone number is 185 58166494</Text>
                <View style={styles.inputText}>
                    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "row", }}>
                        <View style={{justifyContent: "flex-start", alignItems: "center",}}>
                            <Text style={{color: "#000"}}>+19</Text>
                            <Text style={{fontSize: 12, color: "#000", marginRight: -15}}>china</Text>
                        </View>
                        <TextInput
                            // value={searchText}
                            onChangeText={(text) => handleChange(text)}
                            placeholder='Phone Number'
                            placeholderTextColor={"#b8c4d7"}
                            style={{ paddingLeft: 15, borderBottomColor: "#34A853", borderBottomWidth: 1, width: '70%', fontSize: 12, paddingBottom: 5, marginLeft: 20, marginTop: -10 }}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

