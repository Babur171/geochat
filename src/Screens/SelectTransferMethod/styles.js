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
 
    text: { marginTop: 5, fontSize: 20, color: "#000", textAlign: "center"},

    label: { fontWeight: "400", color: "#000", fontSize: 15 },
    secLable:{fontWeight: "400", color: "#000", fontSize: 12, opacity: 0.3, width: "80%"},
    img: {
        height: 25,
        width: 22,
        resizeMode: "contain",
    },
    sectionContainer1: {
        width: "102%",
        alignSelf: "center",
        paddingVertical: 5,
        marginTop: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        paddingHorizontal: 15
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        },

})