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
export const ChattingList = ({ navigation }) => {

    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
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
            {
                id: 3,
                title: "Church Group chat",
                message: "Jesus is lord",

            },
            {
                id: 1,
                title: "交友网群",
                message: "谁准备和我聊天？",

            },
        ]);
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/signup.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={styles.inputText}>
                    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "row", }}>
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
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/plus.png")} style={styles.mr10} />
                </View>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: 75 }}>
                    {
                        data.map((item, index) =>
                         <Pressable style={styles.walletCard} key = {index} onPress={() => navigation.navigate()}>
                            <View style={styles.walletInner}>
                                <View style={styles.imgContainer}>
                                    <Image source={{uri: "jg"}} style={styles.image1} />
                                </View>
                                <View style={styles.walletCarder}>
                                    <Text style={styles.eventName}>{item.title}</Text>
                                    <Text style={styles.eventType}>{item.message}</Text>
                                </View>
                            </View>
                        </Pressable>)
                    }

                </View>
                <View style={styles.footer}>
                    <Footer
                        images={[
                            // @ts-ignore
                            require("../../Assets/message.png"),
                            // @ts-ignore
                            require("../../Assets/adduser.png"),
                            // @ts-ignore
                            require("../../Assets/globe.png"),
                            // @ts-ignore
                            require("../../Assets/profile.png")
                        ]}
                        routes={['homeScreen', 'orderStatusScreen', 'searchScreen', 'accountScreen']}
                        navigation={navigation}
                        titles={["Chats", "Contacts", "Discover", "Me"]}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

const Footer = props => {
    const generator = props.hideTitle ? props.images : props.titles;
    const bgColor = {
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#D9E7FD"
    };
    const titleColor = {
        color: props.titleColor ? props.titleColor : "#fff"
    };
    const activeColor = {
        color: props.activeColor ? props.activeColor : "#000"
    };
    return (
        <View style={[footerStyles.footer, bgColor]}>
            {generator.map((title, index) => (
                <View style={footerStyles.footerItem} key={index}>
                    <Image
                        style={footerStyles.footerImage}
                        source={props.images[index]}
                    />
                    {props.hideTitle
                        ? null
                        : (
                            <Text
                                style={[
                                    titleColor,
                                    footerStyles.footerItemText,
                                    index === props.active ? activeColor : null
                                ]}>
                                {title}
                            </Text>
                        )}
                </View>
            ))}
        </View>
    );
};

const footerStyles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25
    },
    footerItem: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    footerItemText: {
        fontSize: 12,
        color: "#000",
        marginTop: 2
    },
    footerImage: {
        width: 24,
        height: 23,
        resizeMode: "contain"
    }
});