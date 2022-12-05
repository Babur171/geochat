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
    bar: {
        height: 18,
        width: 18,
        resizeMode: "contain",
        marginRight: 10
    },
    war: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        alignSelf: "center"
    },
    cir: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        alignSelf: "center"
    },
    header: {
        paddingHorizontal: 15,
        width: "100%",
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    mainContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        height: 450,
        marginHorizontal: 10,
        padding: 20,

    },
    topSec: {
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
    },
    midSec: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    text: { fontSize: 15, color: "#000", textAlign: "center", paddingHorizontal: 10 },
    detail: { fontSize: 11, color: "#000", textAlign: "center", paddingVertical: 20, alignSelf: "center"},
    switchContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10
    },
    sectionContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: "95%",
        alignSelf: "center",
        backgroundColor: "#caddfc",
        marginVertical: 15,
        borderRadius: 10
    },

    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
       
    },

    label: { fontWeight: "400", color: "#000", fontSize: 15 },
    img: {
        height: 20,
        width: 20,
        resizeMode: "contain", marginRight: 10
    },
    sectionContainer1: {
        width: "102%",
        alignSelf: "center",
        paddingVertical: 5,
        marginTop: 0,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }
})