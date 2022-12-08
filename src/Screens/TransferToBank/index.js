import React, { useState } from "react"
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
    TextInput,
    Modal,
} from "react-native"

import { styles } from "./styles";
export const TransferToBank = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const handleChange = (num) => {
        setValue(num)
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={[styles.text, { fontSize: 20 }]}>Transfer to Bank</Text>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/blackDots.png")} style={styles.dots} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.mainCover}>
                <View style={styles.inputContainer}>
                    <Text style={styles.InputLabel}>Name</Text>
                    <TextInput
                        // value={searchText}
                        onChangeText={(text) => handleChange(text)}
                        placeholder='Username'
                        placeholderTextColor={"#a8b5c9"}
                        style={{ fontSize: 18 }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.InputLabel}>Card No.</Text>
                    <TextInput
                        // value={searchText}
                        onChangeText={(text) => handleChange(text)}
                        placeholder='Bank Number'
                        placeholderTextColor={"#a8b5c9"}
                        style={{ fontSize: 18 }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.InputLabel}>Bank</Text>
                    <TextInput
                        // value={searchText}
                        onChangeText={(text) => handleChange(text)}
                        placeholder='Bank name'
                        placeholderTextColor={"#a8b5c9"}
                        style={{ fontSize: 18 }}
                    />
                </View>
            </View>



            <Button buttonText={"Next"} textColor={"#FFF"} buttonWidth={330} backgroundColor={"#000"} onPress={() => setModalVisible(!modalVisible)} />
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
                        <Text style={[styles.modalText, { opacity: 1.0 }]}>Bank Transfer History</Text>
                        <Text style={[styles.modalText, { opacity: 1.0 }]}>Help Center</Text>
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
        height: 50,
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 0,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

    },
    btnText: {
        color: "#fff",
        fontSize: 18,
        opacity: 0.7
    },
    childrenContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});

