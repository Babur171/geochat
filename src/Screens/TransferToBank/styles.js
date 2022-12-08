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
        height: 7,
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
    text: { marginTop: 5, fontSize: 12, color: "#000" },
    inputContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 15,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        paddingTop: 5
    },
    centeredView: {
        position: "absolute",
        bottom: 0,
        height: 170,
        backgroundColor: "#000",
        width: windowWidth,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalView: {
        paddingBottom: 10, paddingTop: 30
    },

    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#000",
        padding: 10,
        elevation: 2,
        paddingVertical: 13,
    },
    textStyle: {
        color: "white",
        textAlign: "center",
        fontSize: 15
    },
    modalText: {
        fontSize: 15,
        marginBottom: 17,
        textAlign: "center",
        color: "#FFFFFF",
        opacity: 0.7,
    },
    mainCover: { marginHorizontal: 15, marginTop: 20, backgroundColor: "#D9D9D9" },
    textLabel: { color: "#000", fontSize: 18, width: '25%' }

})