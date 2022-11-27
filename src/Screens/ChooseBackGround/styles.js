import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9E7FD",
    },
    inputText: {
        backgroundColor: "#D9E7FD",
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    m12: {
        height: 19,
        width: 21,
        resizeMode: "contain"
    },
    switchContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 10,
        paddingVertical: 10
      },
      sectionContainer: {marginTop: 20, backgroundColor: "#fff" },
    switchContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 20,
      paddingRight: 10,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#E5E5E5"
    },
    label: { fontWeight: "400", color:"#000", fontSize: 15 },
})