import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "#D9E7FD",
    },
    walletCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15, marginTop: 30
    },
    walletInner: {
        display: "flex",
        flexDirection: "row"
    },
    imgContainer: {
        height: 75,
        width: 75,
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
        height: 75,
        width: 75, borderRadius: 10,
    },
    bar: {
        height: 18,
        width: 18, resizeMode: "contain",
        marginRight: 20
    },
    next: {
        height: 13,
        width: 8, resizeMode: "contain",
        alignSelf: "center"
    },
    eventName: {
        fontSize: 15,
        color: "#000",
        marginLeft: 15,
        marginBottom: 20,
        marginTop: 10
    },
    status: {
        height: 19,
        width: 58, resizeMode: "contain",
        marginRight: 10
    },
    message: {
        height: 19,
        width: 22, resizeMode: "contain",
    },
    idText: {
        fontSize: 15,
        color: "#000",
        marginLeft: 15,
        opacity: 0.5
    },
    secContainer: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: -5, height: 45, paddingLeft: 100 },
    header: {
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
        width: "102%",
        marginTop: -10,
        paddingBottom: 10
    },
    switchContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10
    },
    sectionContainer: {
        paddingHorizontal: 15,
        width: "102%",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
    },

    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },

    label: { fontWeight: "400", color: "#000", fontSize: 15 },
    m12: {
        height: 13,
        width: 8,
        resizeMode: "contain"
    },
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
