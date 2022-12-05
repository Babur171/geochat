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
        marginRight: 15,
        height: 30,
        width: 30,
        resizeMode: "contain"
    },
    m12: {
        height: 22,
        width: 25,
        resizeMode: "contain",
        alignSelf: "flex-end"
        
    },
    m13: {
        height: 14,
        width: 14,
        resizeMode: "contain"
    },
    header: {
        paddingHorizontal: 15,
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    walletCard: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    walletInner: {
        display: "flex",
        flexDirection: "row"
    },
    imgContainer: {
        height: 52,
        width: 59,
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
        width: 75, resizeMode: "contain",
    },
    image2: {
        height: 50,
        width: 50, borderRadius: 10,
        marginRight: 10
    },
    image: { resizeMode: "stretch", height: 10, width: 60, marginLeft: 10, marginRight: -5 },
    walletCarder: {
        alignSelf: "center",
        display: "flex",
        flexDirection: "column"
    },
    eventName: {
        color: "#000",
        fontSize: 20,
        marginRight: 20

    },
    subtitle: {
        color: "#000",
        fontSize: 15,
        opacity: 0.4
    },
    productsContainer: {
		paddingHorizontal: 55,
        width: '100%',
        
	},
    postTime:{ alignSelf: "flex-start", marginLeft: 55, marginTop: 10 }
})
