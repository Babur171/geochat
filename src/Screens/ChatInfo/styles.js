import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9E7FD",
    },
    header:{
    paddingTop: 10,
    backgroundColor: "#D9E7FD",
    margin:0,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
},
    inputText: {
        backgroundColor: "#D9E7FD",
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    midSection:{
        backgroundColor: "#D9E7FD",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    image1:{ height: 40,
        width: 40, resizeMode: "cover"},

    m12:{
        height: 19,
        width: 21,
        resizeMode: "contain"
    },
  
    modalStyle: {
        position: "absolute",
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: windowWidth,
        justifyContent:'center'
      },
    imgContainer: {
        height: 40,
        width: 40,
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
        marginRight: 10
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
    switchContainer1: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 20,
      paddingRight: 10,
      paddingVertical: 10
    },
    label: { fontWeight: "400" },
})