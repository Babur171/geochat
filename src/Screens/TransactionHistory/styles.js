import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BBD3FB"
    },
    m12: {
        height: 15,
        width: 9,
        resizeMode: "contain",
    },
    header: {
        paddingHorizontal: 15,
        width: "100%",
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: { marginTop: 5, fontSize: 20, color: "#000" },
})