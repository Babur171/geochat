import React from "react"

import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
} from "react-native"

import { styles } from "./styles";
export const Profile = ({ navigation }) => {



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.walletCard}>
                    <View style={styles.walletInner}>
                        <View style={styles.imgContainer}>
                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/dorus.png")} style={styles.image1} />
                        </View>
                        <View style={styles.walletCarder}>
                            <Text style={styles.eventName}>Durus</Text>
                            <Text style={styles.idText}>weixin ID: doris36</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/bar.png")} style={styles.bar} />
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/next.png")} style={styles.next} />
                    </View>
                </View>
                <View style={styles.secContainer}>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/status.png")} style={styles.status} />
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/messagedots.png")} style={styles.message} />
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <View style={styles.switchContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/img.png")} style={styles.img} />
                        <Text style={styles.label}>My Post</Text>
                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={styles.m12} />
                </View>
                <View style={styles.switchContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/dol.png")} style={styles.img} />
                        <Text style={styles.label}>Crads & Offers</Text>
                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={styles.m12} />
                </View>
                <View style={styles.switchContainer1}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/germs.png")} style={styles.img} />
                        <Text style={styles.label}>Sticker Gallery</Text>
                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={styles.m12} />
                </View>
            </View>

            <View style={styles.sectionContainer1}>
                <View style={styles.switchContainer}>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/sett.png")} style={styles.img} />
                        <Text style={styles.label}>Settings</Text>
                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={styles.m12} />
                </View>
            </View>

        </View>
    );
};


