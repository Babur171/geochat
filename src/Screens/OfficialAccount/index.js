import React, { useState } from "react"
import {
    View,
    Text,
    Pressable,
    Image,
    Modal,
} from "react-native"

import { styles } from "./styles";
export const OfficialAccount = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={[styles.container]}>
            <View style={styles.header}>
                <View style={[styles.inputText, { paddingHorizontal: 20 }]}>
                    <Pressable onPress={()=>navigation.goBack()}>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/back.png")} style={styles.m12} />
                        </Pressable>
                    <Text style={{ fontSize: 20, color: "#000" }}>Official Accounts</Text>

                    <View style={styles.leftSect}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/search.png")} style={[styles.m12, {opacity: 0.3}]} />
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/dots.png")} style={[styles.m12, {height: 4, marginLeft: 10}]} />
                            </Pressable>
                    </View>
                </View>

            </View>


            <View style={styles.sectionContainer}>
                <Pressable style={styles.switchContainer} onPress={() => setModalVisible(!modalVisible)}>
                    <View style={styles.imgContainer}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/Rectangle3.png")} style={styles.profile} />
                    </View>
                    <Text style={styles.label}>Hejjshd Masdarsh</Text>
                </Pressable>
                <Pressable style={styles.switchContainer1} onPress={() => setModalVisible(!modalVisible)}>
                    <View style={styles.imgContainer}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/Rectangle4.png")} style={styles.profile} />
                    </View>
                    <Text style={styles.label}>珍惜马里人</Text>
                </Pressable>
            </View>

            <Pressable style={styles.sectionContainer} onPress={() => setModalVisible(!modalVisible)}>
            
                <View style={styles.switchContainer1}>
                    <View style={styles.imgContainer}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/Rectangle5.png")} style={styles.profile} />
                    </View>
                    <Text style={styles.label}>珍惜马里人</Text>
                </View>
            </Pressable>

            <View style={styles.sectionContainer}>
                <Pressable style={styles.switchContainer}>
                    <View style={styles.imgContainer}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/Rectangle6.png")} style={styles.profile} />
                    </View>
                    <Text style={styles.label}>Hejjshd Masdarsh</Text>
                </Pressable>
                <Pressable style={styles.switchContainer1}>
                    <View style={styles.imgContainer}>
                        <Image source={require(
                            // @ts-ignore
                            "../../Assets/Rectangle7.png")} style={styles.profile} />
                    </View>
                    <Text style={styles.label}>珍惜马里人</Text>
                </Pressable>
            </View>
            <Text style={styles.text}>5 Account(s)</Text>
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
                            <Text style={[styles.modalText, styles.borderBottom]}>Add Official Account</Text>
                            <Text style={[styles.modalText, {opacity: 1.0}]}>My Information & Authorizations</Text>
                            <Pressable
                                style={[styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
        </View>
    );
};

