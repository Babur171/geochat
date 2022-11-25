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
        top: 40,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 3,
        backgroundColor: "#D9E7FD",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    mr10: {
        marginRight: 10,
        height: 30,
        width: 30,
        resizeMode: "contain"
    },
    m12:{
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
        marginTop: 10,
        marginHorizontal: 10
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
    image1:{ height: 52,
        width: 59, resizeMode: "contain"},
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
})