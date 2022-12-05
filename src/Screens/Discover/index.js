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
export const Discover = ({ navigation }) => {

    const [value, setValue] = useState("");
    const handleChange = async (text) => {
        setValue(text)
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/signup.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={{ fontSize: 20, color: "#000", textAlign: "center" }}>Save as Tag</Text>
                    <Text />
                </View>

                <View style={styles.inputText}>
                    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "row", }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/search.png")} style={[styles.m12, { opacity: 0.3 }]} />
                        <TextInput
                            // value={searchText}
                            onChangeText={(text) => handleChange(text)}
                            placeholder='Search'
                            placeholderTextColor={"#000"}
                            style={{ paddingLeft: 10, opacity: 0.5, fontSize: 15 }}
                        />
                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/plus.png")} style={[styles.m13]} />
                </View>

                <Pressable style={[styles.sectionContainer, {marginVertical: 10}]}>
                    <View style={styles.switchContainer1}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/chart.png")} style={styles.wheel} />
                        <Text style={styles.label}>Moments</Text>
                    </View>
                    <View style={[styles.leftSect, { borderBottomWidth: 0 }]}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/profile.png")} style={styles.profile} />
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/next1.png")} style={styles.next1} />
                    </View>

                </Pressable>

                <View style={styles.sectionContainer1}>
                    <Pressable style={styles.leftSect}>
                        <View style={styles.switchContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/redcircle.png")} style={styles.wheel} />
                            <Text style={styles.label}>Moments</Text>
                        </View>
                        <View style={styles.switchContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/profile.png")} style={styles.profile} />
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/next1.png")} style={styles.next1} />
                        </View>
                    </Pressable>

                    <Pressable style={[styles.leftSect, { borderBottomWidth: 0, paddingVertical: 10 }]}>
                        <View style={styles.switchContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/wheel.png")} style={styles.wheel} />
                            <Text style={styles.label}>Moments</Text>
                        </View>
                        <View style={styles.switchContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/next1.png")} style={[styles.next1]} />
                        </View>
                    </Pressable>
                </View>

                <View style={styles.sectionContainer1}>
                    <Pressable style={styles.leftSect}>
                        <View style={styles.switchContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/light-minus.png")} style={styles.wheel} />
                            <Text style={styles.label}>Moments</Text>
                        </View>
                        <View style={styles.switchContainer}>
                        <Text></Text>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/next1.png")} style={styles.next1} />
                        </View>
                    </Pressable>

                    <Pressable style={[styles.leftSect, { borderBottomWidth: 0, paddingVertical: 10 }]}>
                        <View style={styles.switchContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/mobile.png")} style={styles.wheel} />
                            <Text style={styles.label}>Moments</Text>
                        </View>
                        <View style={styles.switchContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/next1.png")} style={[styles.next1]} />
                        </View>
                    </Pressable>
                </View>
                <View style={styles.sectionContainer1}>
                    <Pressable style={styles.leftSect}>
                        <View style={styles.switchContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/setting.png")} style={styles.wheel} />
                            <Text style={styles.label}>Moments</Text>
                        </View>
                        <View style={styles.switchContainer}>
                           <Text></Text>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/next1.png")} style={styles.next1} />
                        </View>
                    </Pressable>

                    <Pressable style={[styles.leftSect, { borderBottomWidth: 0, paddingVertical: 10 }]}>
                        <View style={styles.switchContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/usersearch.png")} style={styles.wheel} />
                            <Text style={styles.label}>Moments</Text>
                        </View>
                        <View style={styles.switchContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/next1.png")} style={[styles.next1]} />
                        </View>
                    </Pressable>
                </View>

                <Pressable style={styles.sectionContainer}>
                    <View style={styles.switchContainer1}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/rainbow1.png")} style={styles.wheel} />
                        <Text style={styles.label}>Moments</Text>
                    </View>
                    <View style={[styles.leftSect, { borderBottomWidth: 0 }]}>
                       <Text />
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/next1.png")} style={styles.next1} />
                    </View>

                </Pressable>
                <Pressable style={styles.sectionContainer}>
                    <View style={styles.switchContainer1}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/rect.png")} style={styles.wheel} />
                        <Text style={styles.label}>Moments</Text>
                    </View>
                    <View style={[styles.leftSect, { borderBottomWidth: 0 }]}>
                       <Text />
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/next1.png")} style={styles.next1} />
                    </View>

                </Pressable>
                <Pressable style={styles.sectionContainer}>
                    <View style={styles.switchContainer1}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/s.png")} style={styles.wheel} />
                        <Text style={styles.label}>Moments</Text>
                    </View>
                    <View style={[styles.leftSect, { borderBottomWidth: 0 }]}>
                       <Text />
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/next1.png")} style={styles.next1} />
                    </View>

                </Pressable>

            </ImageBackground>
        </View>
    );
};

