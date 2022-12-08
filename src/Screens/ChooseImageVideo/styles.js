
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: "#BBD3FB",
        paddingHorizontal: 5
    },
    courseList: {
        flex: 1,
    },
    columnWrapper: {
        justifyContent: "space-around"
    },
    header: {
        width: "100%",
        marginVertical: 20,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    done: { fontSize: 13, color: "#000", backgroundColor: "#caddfc", opacity: 0.5, paddingHorizontal: 17, paddingVertical: 3, borderRadius: 5, },
    m12: {
        height: 12,
        width: 12,
        resizeMode: "contain"
    },
    down: {
        height: 19,
        width: 19,
        resizeMode: "contain"
    },
    footer: {
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: 0,
    },
    subheader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 150,
        backgroundColor: "#caddfc",
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10,
        marginRight: 70,
    },
    pickText: { fontSize: 15, color: "#000", textAlign: "center", }
})
