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
    Modal,
} from "react-native"

import { styles } from "./styles";
export const SearchFriends = ({ navigation }) => {

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

    const letters = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/signup.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={{ fontSize: 17, color: "#000", textAlign: "center" }}>Chats Only Friends</Text>
                    <Text />
                </View>

                <View style={styles.inputText}>
                    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "row", }}>
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
                <Text style={{ fontSize: 11, color: "#000", paddingHorizontal: 10, paddingVertical: 15 }}>You we not see each other’s Moments, Time Capsule WeRun, Top Story
                    and shared third-party content.</Text>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: 5, paddingHorizontal: 10 }}>
                    {
                        data.map((item, index) =>
                            <View style={{ alignSelf: "flex-start" }}>
                                <Text style={{ paddingHorizontal: 10, fontSize: 15, color: "#000" }}>{letters[index]}</Text>
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
                <Text style={{ fontSize: 20, textAlign: "center", color: "#000" }}>6 Friends</Text>
                <View style={styles.footer}>
                    <Footer setModalVisible={setModalVisible} />
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Selects from the list</Text>
                            <Text style={[styles.modalText, {opacity: 1.0}]}>Hide Their Moments</Text>
                            <Text style={[styles.modalText, {opacity: 1.0}]}>Hide my Posts</Text>
                            <Text style={[styles.modalText, {opacity: 1.0}]}>Tags</Text>
                            <Text style={[styles.modalText, {opacity: 1.0}]}>Contacts</Text>
                            <Pressable
                                style={[styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </ImageBackground>
        </View>
    );
};

const Footer = props => {

    return (
        <View style={[footerStyles.footer]}>
            <Pressable onPress={() => props.setModalVisible(true)}>
                <Text style={footerStyles.footerItem}>Add</Text>
            </Pressable>
            <Text style={[footerStyles.footerItem, { paddingHorizontal: 17 }]}>Remove</Text>
        </View>
    );
};

const footerStyles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 59,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        backgroundColor: "#4285F4"
    },
    footerItem: {
        backgroundColor: "#5591f5", paddingHorizontal: 30, paddingVertical: 5, borderRadius: 15
    },

});