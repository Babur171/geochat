import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        height: windowHeight,
        width: windowWidth
    },
    header: {
        paddingTop: 10,
        margin: 0,
    },
    heading:{ fontSize: 20, color: "#000" },
    inputText: {
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    image1: {
        height: 40,
        width: 40, resizeMode: "cover"
    },

    m12: {
        height: 19,
        width: 21,
        resizeMode: "contain"
    },
    text:{position: "absolute", top: "45%", alignSelf: "center", textAlign: "center", fontSize: 15, color: "#000", lineHeight: 19}
})