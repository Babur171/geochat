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
    img: {
        height: 20,
        width: 20,
        resizeMode: "contain", marginRight: 10
    },
    bars: {
        height: 16,
        width: 18,
        resizeMode: "contain", marginRight: 10
    },
    sectionContainer1: {
        width: "90%",
        borderRadius: 10,
        alignSelf: "center",
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: "#caddfc",
        marginVertical: 30
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },

    label: { fontWeight: "400", color: "#000", fontSize: 15 },

})