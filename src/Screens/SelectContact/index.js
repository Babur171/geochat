import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    ImageBackground,
    TextInput,
    StyleSheet
} from "react-native"

import { styles } from "./styles";
export const SelectContact = ({ navigation }) => {

    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const handleChange = async (text) => {
        setValue(text)
    }

    useEffect(() => {
        setData([
            {
                id: 1,
                title: "GEOFFROY",
                message: "Done?",

            },
            {
                id: 2,
                title: "杰里布拉斯场",
                message: "先生，你好",


            },
            {
                id: 3,
                title: "Muahmed Aness",
                message: "where are you Sir?",

            },
            {
                id: 1,
                title: "网店群聊、我们聊天、视频通话等",
                message: "这里的任何人",

            },
            {
                id: 2,
                title: "Nokuley bary",
                message: "Halo",


            },

        ]);
    }, []);


    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/signup.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={{ fontSize: 17, color: "#000", textAlign: "center" }}>Select Contact</Text>
                    <Text style={styles.done}>Done</Text>
                </View>

                <View style={styles.inputText}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row", }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/search.png")} style={styles.m12} />
                        <TextInput
                            // value={searchText}
                            onChangeText={(text) => handleChange(text)}
                            placeholder='Search'
                            placeholderTextColor={"#000"}
                            style={{ paddingLeft: 10, opacity: 0.5, fontSize: 15 }}
                        />
                    </View>
                </View>
                <Text style={styles.text}>Import from Group</Text>
                <View style={styles.listView}>
                    {
                        data.map((item, index) =>
                            <View style={styles.mainContainer}>
                                <Image source={require("../../Assets/circle.png")} style={styles.image2} />
                                <Pressable style={styles.walletCard} key={index}>
                                    <View style={styles.walletInner}>
                                        <View style={styles.imgContainer}>
                                            <Image source={{ uri: "jg" }} style={styles.image1} />
                                        </View>
                                        <View style={styles.walletCarder}>
                                            <Text style={styles.eventName}>{item.title}</Text>
                                            <Text style={styles.eventType}>{item.message}</Text>
                                        </View>
                                    </View>
                                </Pressable>
                            </View>)
                    }

                </View>
            </ImageBackground>
        </View>
    );
};
