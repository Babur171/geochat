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

    war: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        alignSelf: "center"
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
    text:{fontSize: 20, color: "#000",},
    detail: { fontSize: 11, color: "#000", textAlign: "center", paddingVertical: 20, alignSelf: "center"},
 subSec:{ width: '100%', alignSelf: "center", marginTop: 60 }
})