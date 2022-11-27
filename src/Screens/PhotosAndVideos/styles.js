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
    searchBar: { justifyContent: "flex-start", alignItems: "center", flexDirection: "row", backgroundColor: "#e5eefc", paddingHorizontal: 20},
    productsContainer: {
		paddingHorizontal: 10,
	},
})