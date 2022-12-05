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
    image2:{ resizeMode: "contain", height: 24, width: 24, marginRight: 10, alignSelf: "flex-start", marginTop: 20,},
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
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
   done:{ fontSize: 12, color: "#000", backgroundColor: "#55DA79", paddingHorizontal: 17, paddingVertical: 3, borderRadius: 10},
   listView:{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: 5, paddingHorizontal: 10, marginTop: 10 },
   text: {alignSelf: "flex-start", paddingHorizontal: 10, fontSize: 15, color: "#000", marginTop: 20},
   mainContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", paddingHorizontal: 10 }
})