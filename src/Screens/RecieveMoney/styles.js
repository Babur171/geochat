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
    scan: {
        height: 270,
        width: 281,
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
        paddingTop: 25

    },
    label: { fontWeight: "400", color: "#000", fontSize: 10 },
    img: {
        height: 13,
        width: 8,
        resizeMode: "contain",
    },
    text1: { fontSize: 10 },
    textContainer: { flexDirection: "row", justifyContent: "space-between", width: '100%', alignItems: "center", marginTop: 0, paddingHorizontal: 40 },
    bottomSec: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: 15 },
    centeredView: {
        position: "absolute",
        bottom: 30,
        height: '33%',
        backgroundColor: "#000",
        width: windowWidth,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        paddingBottom: 20
    },
    modalView: {
        paddingBottom: 10, paddingTop: 30
    },

    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        alignSelf: "center",
        backgroundColor: "#3FD21A",
        borderRadius: 10,
        padding: 10,
        width: 170,
        paddingVertical: 13,
        marginTop: 15
    },
    textStyle: {
        color: "white",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 10,
        textAlign: "center",
        color: "#FFFFFF",
        opacity: 0.7,
        fontSize: 12
    },
    war: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        alignSelf: "center",
        marginBottom: 5
    },
})