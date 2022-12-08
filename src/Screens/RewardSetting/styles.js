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
        height: 320,
        marginHorizontal: 10,
        padding: 20,

    },
    text: { marginTop: 5, fontSize: 12, color: "#000" },
    dorus: {
        height: 60,
        width: 60,
        resizeMode: "contain",
    },
    input:{marginHorizontal: 10, marginTop: 20, marginBottom: 10},
    rewardText:{backgroundColor: "#D9D9D9", fontSize: 15, paddingHorizontal: 20, paddingVertical: 20},
    secContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20 }
})