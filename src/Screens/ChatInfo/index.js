import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    Switch,
    TouchableOpacity,
} from "react-native"

import { styles } from "./styles";
export const ChatInfo = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
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
            <View style={styles.header}>
                <View style={[styles.inputText, {paddingHorizontal: 10}]}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/back.png")} style={styles.m12} />
                        </TouchableOpacity>
                    <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000" }}>Chat Info</Text>

                    <Text></Text>
                </View>

                <View style={styles.midSection}>
                    <View style={styles.imgContainer}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/profileimg.png")} style={styles.image1} />
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("PhotosAndVideos")} style={styles.imgContainer}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/addfile.png")} style={styles.image1} />
                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity style={[styles.inputText, { backgroundColor: "#fff", paddingVertical: 10,  paddingLeft: 20, paddingRight: 10, color: "#000", marginTop: 20}]}>
                <Text style={{}}>Search Chat History</Text>
                <Image source={require(
                    // @ts-ignore
                    "../../Assets/next.png")} style={styles.m12} />
            </TouchableOpacity>

            <View style={styles.sectionContainer}>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Mute Notification</Text>
                    <Switch
                        trackColor={{ false: "#E5E5E5", true: "#28D757" }}
                        thumbColor={isEnabled ? "#Fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Sticky on Top</Text>
                    <Switch
                        trackColor={{ false: "#E5E5E5", true: "#28D757" }}
                        thumbColor={isEnabled ? "#Fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.switchContainer1}>
                    <Text style={styles.label}>Alert</Text>
                    <Switch
                        trackColor={{ false: "#E5E5E5", true: "#28D757" }}
                        thumbColor={isEnabled ? "#Fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                </View>
                
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("ChooseBackGround")} style={[styles.inputText, { backgroundColor: "#fff", paddingVertical: 10, paddingLeft: 20, paddingRight: 10, color: "#000", marginTop: 20 }]}>
                <Text style={{}}>Background</Text>
                <Image source={require(
                    // @ts-ignore
                    "../../Assets/next.png")} style={styles.m12} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("ChatHistory")} style={[styles.inputText, { backgroundColor: "#fff", paddingVertical: 10, paddingLeft: 20, paddingRight: 10, color: "#000", marginTop: 20 }]}>
                <Text style={{}}>Clear Chat History</Text>
                <Image source={require(
                    // @ts-ignore
                    "../../Assets/next.png")} style={styles.m12} />
            </TouchableOpacity>
            <View style={[styles.inputText, { backgroundColor: "#fff", paddingVertical: 10,  paddingLeft: 20, paddingRight: 10, color: "#000", marginTop: 20 }]}>
                <Text style={{}}>Report</Text>
                <Image source={require(
                    // @ts-ignore
                    "../../Assets/next.png")} style={styles.m12} />
            </View>

        </View>
    );
};

