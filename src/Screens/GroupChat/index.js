import React, { useState } from "react"
import {
    View,
    Text,
    Pressable,
    Image,
    Modal,
} from "react-native"

import { styles } from "./styles";
export const GroupChat = ({ navigation }) => {



    return (
        <View style={[styles.container]}>
            <View style={styles.header}>
                <View style={[styles.inputText, { paddingHorizontal: 20 }]}>

                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/back.png")} style={styles.m12} />
                    <Text style={styles.heading}>Group Chat</Text>

                    <View style={styles.leftSect}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/search.png")} style={[styles.m12, { opacity: 0.3 }]} />
                    </View>
                </View>

            </View>
            <Text style={styles.text}>
                Within a groups’s Chat info screen, enable ‘’ Save to
                Contacts’’ for it to appear here
            </Text>

        </View>
    );
};

