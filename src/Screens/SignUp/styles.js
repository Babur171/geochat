import React from "react";
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        width: '100%',
        backgroundColor: "#fff"
    },
    heading: {
        position: "absolute",
        top: 5,
        width: '100%',
    },
    headingText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#000000",
        marginVertical: 5
    },
    emailContainer: {
        marginBottom: 10
    },
    mr10: {
        marginBottom: 15
    },
    forgotPassword: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40
    },
    loginContainer: {
        marginTop: "5%",
        width: "90%",
        alignSelf: "center"
    },
    orContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    line: {
        height: 1.5,
        width: 105,
        backgroundColor: "rgba(0, 0, 0, 0.05)"
    },
    orText: {
        alignSelf: "center",
        fontSize: 12,
        color: "#231F20",
        opacity: 0.5,
        marginVertical: 10
    },
    imageContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 75,
        height: 48,
        borderRadius: 6,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    icon: {
        height: 36,
        width: 39,
        resizeMode: "contain",
        marginLeft: 5
    },
    footerContainer: {
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        bottom: 20
    },
    footerText: {
        color: "#6B6B6B"
    },
    text: { color: "#888888", lineHeight: 20 },
    forgetContainer: {
        paddingRight: 5,
        marginVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: -8
    },
    rememberContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

    },
    socialText: { color: "#222222" },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,

    },
    button: {
        marginVertical: 10,

    },
    loginText: { color: "#000000", fontWeight: "bold" },
    blurImageStyle: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
    language: { fontSize: 13, color: "#000000", alignSelf: "flex-end", marginVertical: 10, marginRight: 10 }
});