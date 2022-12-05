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


    imgContainer: {
        height: 42,
        width: 42,
        backgroundColor: "#E533E5",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    profile: {
        height: 42,
        width: 42,
        borderRadius: 20,
    },
    sectionContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 20,
        backgroundColor: "#D9E7FD"
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    },
    switchContainer1: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 10,
        paddingVertical: 10
    },
    label: { fontWeight: "400" },
    leftSect: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    text: { alignSelf: "center", marginVertical: 30, color: "#000", fontSize: 18 },
    centeredView: {
        backgroundColor: 'transparent',
        position: "absolute",
        bottom: 0,
        height: 203,
        width: windowWidth,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    modalView: {
        backgroundColor: 'transparent',
    },

    buttonClose: {
        marginTop: 8,
        backgroundColor: "#000",
        borderWidth: 1,
        paddingVertical: 20,
    },
    textStyle: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    },
    modalText: {
        textAlign: "center",
        color: "#FFFFFF",
        opacity: 0.7,
        backgroundColor: "#000",
        paddingVertical: 20,
        fontSize: 18
    },
    borderBottom: {opacity: 1.0, borderTopRightRadius: 10, borderTopLeftRadius: 10, borderBottomColor: "#a3a3a3", borderBottomWidth: 1}
})