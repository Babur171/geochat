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
    dots: {
        height: 9,
        width: 27,
        resizeMode: "contain",
    },
    header: {
        paddingHorizontal: 15,
        width: "100%",
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: { marginTop: 10, fontSize: 15, color: "#000", textAlign: "center" },
    inputWrapper: {marginHorizontal: 20, borderColor:"#000", borderWidth: 1, marginTop: 30, paddingHorizontal: 10, paddingVertical: 5}

})