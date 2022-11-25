import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Pressable,
} from "react-native";

export const Button = params => {
    const backgroundColor = params.backgroundColor || "#000";
    const textColor = params.textColor || "#fff";
    const btnStyle = {
        backgroundColor: backgroundColor,
    };
    const btnText = {
        color: textColor
    };
    return (
        <View style={[buttonStyles.btnContainer, params.style]}>
            <View style={!params.hideShadow ? buttonStyles.shadowContainer : null}>
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
        justifyContent: "center"
    },
    shadowContainer: {
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
        backgroundColor: "#fff",
        borderRadius: 10
    },
    btn: {
        height: 50,
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        flexDirection: "row"
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    childrenContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});