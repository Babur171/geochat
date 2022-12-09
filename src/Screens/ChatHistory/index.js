import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    Switch,
    TextInput,
} from "react-native"

import { styles } from "./styles";
export const ChatHistory = ({ navigation }) => {

    const [value, setValue] = useState("");
    const handleChange = async (text) => {
        setValue(text)
    }


    return (
        <View style={styles.container}>
            <View style={styles.inputText}>
                <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "row", backgroundColor: "#e5eefc", borderRadius: 5 }}>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/search.png")} style={styles.m12} />
                    <TextInput
                        // value={searchText}
                        onChangeText={(text) => handleChange(text)}
                        placeholder='Search people near you'
                        placeholderTextColor={"#b8c4d7"}
                        style={{ paddingLeft: 10 }}
                    />
                </View>
                <Pressable onPress={() =>navigation.goBack()}>
                    <Text style={{ fontSize: 17, paddingHorizontal: 5 }}>Cancel</Text>
                </Pressable>

            </View>
            <Text style={{ fontSize: 17, opacity: 0.3, alignSelf: "center" }}>Filter By</Text>
            <View style={styles.addressContainer}>
                <Pressable style={styles.city} onPress={()=>navigation.navigate("SearchChatHistory")}>
                    <Text style={styles.text}>Date</Text>
                </Pressable>
                <Pressable style={styles.state} onPress={()=>navigation.navigate("PhotosAndVideos")}>
                
                    <Text style={styles.text}>Photo & Videos</Text>
                </Pressable>
                <Pressable style={styles.zip}>
                    <Text style={styles.text}>Files</Text>
                </Pressable>
            </View>
            <View style={styles.addressContainer}>
                <Pressable style={styles.city}>
                    <Text style={styles.text}>Date</Text>
                </Pressable>
                <Pressable style={styles.state}>
                    <Text style={styles.text}>Photo & Videos</Text>
                </Pressable>
                <Pressable style={styles.zip}>
                    <Text style={styles.text}>Files</Text>
                </Pressable>

            </View>
            <Pressable style={[styles.addressContainer, { justifyContent: "flex-start" }]}>
                <Text style={[styles.city, { marginLeft: 30 }]}>Mini program</Text>
            </Pressable>


        </View>
    );
};

