
import React from "react"
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
} from "react-native"

import { styles } from "./styles";
export const SelectTransferMethod = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text />
                    <Text></Text>
                </View>
            </View>

            <Text style={[styles.text]}>Select Transfer Method</Text>

            <View style={styles.sectionContainer1}>
                <View style={styles.switchContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/tablet.png")} style={styles.img} />
                        <View style={{ marginTop: 30, marginLeft: 10 }}>
                            <Text style={[styles.label, { marginBottom: 5 }]}>Transfer to Bank Card</Text>
                            <Text style={styles.secLable}>Enter your credit card, visa etc, to transfer to thier
                                bank account </Text>
                        </View>

                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={[styles.m12, { opacity: 0.3, marginLeft: -30 }]} />
                </View>
                </View>
                <View style={styles.sectionContainer1}>
                <View style={styles.switchContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/cell.png")} style={styles.img} />
                        <View style={{ marginTop: 30, marginLeft: 10,}}>
                            <Text style={[styles.label, { marginBottom: 5 }]}>Transfer to Mobile Number</Text>
                            <Text style={styles.secLable}>Enter your credit card, visa etc, to transfer to thier
                                Mobile Number</Text>
                        </View>

                    </View>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={[styles.m12,  { opacity: 0.3, marginLeft: -30 }]} />
                </View>
            </View>
        </View>
    );
};




