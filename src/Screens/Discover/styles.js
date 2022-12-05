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
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginBottom: 30,
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#a3a3a3",
        borderWidth: 1,
        borderRadius: 10,
        height: 45
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
        resizeMode: "contain",
    },
    m13: {
        height: 22,
        width: 22,
        resizeMode: "contain"
    },
    header: {
        paddingHorizontal: 15,
        width: "100%",
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
        height: 30,
        width: 46,
        borderRadius: 5,
        marginRight: 5
    },
    sectionContainer: {
        paddingHorizontal: 15,
        marginVertical: 5,
        paddingVertical: 5,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#D9E7FD"
    },
    switchContainer: {

        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    switchContainer1: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingRight: 10,
        paddingVertical: 5
    },
    label: { fontWeight: "400", fontSize: 15, color: "#000", marginLeft: 10},
    leftSect: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1,
    borderBottomColor: "#000", paddingVertical: 5 },
    text: { alignSelf: "center", marginVertical: 30, color: "#000", fontSize: 18 },
    next1: {
        height: 15,
        width: 20, resizeMode: "contain"
    },
    wheel:{height: 20,
        width: 17, resizeMode: "contain"},
        sectionContainer1: {
            marginVertical: 5,
            width: "100%",
            backgroundColor: "#D9E7FD"
        },
    
    
})