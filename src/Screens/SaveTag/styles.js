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
        flexDirection: "row",
        backgroundColor: "rgba(66, 133, 244, 0.1)",
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 1,
    },
    m12:{
        height: 14,
        width: 14,
        resizeMode: "contain"
    },
    m10: {
        height: 44,
        width: 53,
        resizeMode: "contain"
    },
    header: {
        width: "100%",
        marginVertical: 20,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
   done:{ fontSize: 12, color: "#000", backgroundColor: "#55DA79", paddingHorizontal: 17, paddingVertical: 3, borderRadius: 10, backgroundColor: "#c9dcfc"},
   text: {alignSelf: "flex-start", paddingHorizontal: 15, fontSize: 14, color: "#000", marginTop: 25, marginBottom: 15},
   imgContainer: {
    height: 43,
    width: 53,
    backgroundColor: "#fff",
    borderRadius: 10
},
shadow:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
},
selectSection: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row",
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 25,
    backgroundColor: "rgba(66, 133, 244, 0.1)",
    borderColor: "#000",
    borderWidth: 1
}
 
})