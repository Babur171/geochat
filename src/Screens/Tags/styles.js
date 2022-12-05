import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    blurImageStyle: {
        position: 'absolute',
        resizeMode: "cover",
        width: windowWidth,
        height: windowHeight,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    inputText: {
        marginHorizontal: 10,
        flexDirection: "row",
        backgroundColor: "#fff",
        opacity: 0.4,
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10
    },
    mr10: {
        marginRight: 10,
        height: 30,
        width: 30,
        resizeMode: "contain"
    },
    m12: {
        marginLeft: 10,
        height: 19,
        width: 21,
        resizeMode: "contain"
    },
    walletCard: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 10
    },
    walletInner: {
        display: "flex",
        flexDirection: "row"
    },
    imgContainer: {
        height: 52,
        width: 59,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    image1: {
        height: 52,
        width: 59, resizeMode: "contain"
    },
    image: { resizeMode: "stretch", height: 10, width: 60, marginLeft: 10, marginRight: -5 },
    walletCarder: {
        alignSelf: "center",
        display: "flex",
        flexDirection: "column"
    },
    eventName: {
        color: "#000",
        fontSize: 13,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    eventType: {
        color: "#cfcfcf",
        fontSize: 13,
        marginLeft: 10,
        marginBottom: 8,
    },
    footer: {
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: 0,
    },
    header: {
        width: "100%",
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    centeredView: {
        position: "absolute",
        bottom: 0,
        height: '40%',
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
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        borderColor: "#4285F4",
        borderWidth: 1,
        paddingVertical: 13,
        marginTop: 5
    },
    textStyle: {
        color: "white",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 17,
        textAlign: "center",
        color: "#FFFFFF",
        opacity: 0.7,
    }
})