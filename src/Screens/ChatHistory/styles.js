import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9E7FD",
    },
    addressContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center",marginTop: 10, paddingBottom: 5, width: '100%', paddingHorizontal: 20},
    buttonTextBlack: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
    city: { color: "#000", fontSize: 15, paddingTop: 5, paddingBottom: 5, width: "30%", textAlign: "center",},
    state: { color: "#000", borderLeftColor: "#9F9F9F", borderLeftWidth: 1, borderRightColor: '#9F9F9F', borderRightWidth: 1, paddingTop: 5,  paddingBottom: 5,  width: "40%", textAlign: "center", fontSize: 15},
    zip: { color: "#000", paddingTop: 5, paddingBottom: 5,  width: "30%", textAlign: "center", fontSize: 15},
    inputText: {
        marginTop: 25,
        marginBottom: 15,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D9E7FD"
    },
    m12:{
        marginLeft: 10,
        height: 19,
        width: 21,
        resizeMode: "contain"
    },
    text:{textAlign: "center", color: "#000", fontSize: 15}
  
})