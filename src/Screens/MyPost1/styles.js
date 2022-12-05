import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    },
    m12: {
        height: 15,
        width: 9,
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
    text:{ fontSize: 15, color: "#000", textAlign: "center" }

})