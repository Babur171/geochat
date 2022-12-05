import React, { useState } from "react"
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
    Modal,
} from "react-native"

import { styles } from "./styles";
export const ReceiveMoney = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);



    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={styles.text}>Receive Money</Text>
                    <Text></Text>
                </View>
            </View>

            <View style={styles.mainContainer}>

                <Text style={[styles.text,]}>doris***y</Text>
                <Image source={require(
                    // @ts-ignore
                    "../../Assets/scan.png")} style={styles.scan} />

                <View style={styles.textContainer}>
                    <Text style={styles.text1}>Set Amount</Text>
                    <Text style={styles.text1}>Save Payment code</Text>
                    <Text style={styles.text1}>More setting</Text>
                </View>

                <View style={{ height: 1, width: '90%', backgroundColor: "#000", marginTop: 60 }}></View>
                <Pressable style={styles.bottomSec}  onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.label}>Receipt Manager</Text>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/next.png")} style={styles.img} />
                </Pressable>
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
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/done.png")} style={styles.war} />
                    </Pressable>
                        <Text style={styles.modalText}>Saved to system album</Text>
                        <Text style={styles.modalText}>Do not rent your payment code to thers, otherwise it may be used
                                  for illegal activities</Text>
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Got it</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

        </View>
    );
};




export const Button = params => {
    const backgroundColor = params.backgroundColor || "#000";
    const textColor = params.textColor || "#fff";
    const btnStyle = {
        backgroundColor: backgroundColor,
        width: params.buttonWidth || null
    };
    const btnText = {
        color: textColor
    };
    return (
        <View style={[buttonStyles.btnContainer, params.style]}>
            <View>
                <Pressable
                    style={[buttonStyles.btn, btnStyle]}
                    onPress={params.onPress}>
                    <Text style={[buttonStyles.btnText, btnText]}>
                        {params.buttonText}
                    </Text>
                    <View style={buttonStyles.childrenContainer}>{params.children}</View>
                </Pressable>
            </View>
        </View>
    );
};

const buttonStyles = StyleSheet.create({
    btnContainer: {
        justifyContent: "center", alignItems: "center", marginTop: 20
    },
    btn: {
        width: 100,
        height: 50,
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    btnText: {
        color: "#fff",
        fontSize: 10,
    },
    childrenContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});