import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,    },
    blurImageStyle: {
        resizeMode: "cover",
        width: windowWidth,
        height: windowHeight,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    inputText: {
        marginHorizontal: 10,
        top: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    mr10: {
        marginRight: 10,
        height: 30,
        width: 30,
        resizeMode: "contain"
    },
    m12:{
        marginLeft: 10,
        height: 19,
        width: 21,
        resizeMode: "contain"
    },
    back: {
        height: 13,
        width: 14,
        resizeMode: "contain"
    },
    header:{
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 15,
        marginTop: 15
    }
   
})