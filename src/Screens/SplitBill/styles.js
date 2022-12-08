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
 
    text: { marginTop: 5, fontSize: 12, color: "#000" },
    dorus: {
        marginVertical: 10,
        height: 60,
        width: 60,
        resizeMode: "contain",
    },
    bottom: {position: "absolute", bottom: 50, width: '100%', justifyContent: "center", alignItems: "center"},
   bottomText: {color: "#000", fontSize: 12, marginVertical: 10},
   desc:{ fontSize: 12, color: "#000", marginHorizontal: 20, marginVertical: 20, textAlign: "center" }
})