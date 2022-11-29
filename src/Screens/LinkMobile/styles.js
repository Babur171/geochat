import React from "react";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  main: {
    flexDirection: "row",
    marginTop: 24,
    marginHorizontal: 20,
    

  },
  blurImageStyle: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  img: {
    resizeMode: "contain",
    width: 14,
    height: 14,
    marginLeft: 15,
  },
  //   card:{
  //     backgroundColor: '#fff',
  //     width: 296,
  //     height: 45,
  //     shadowColor: '#000',
  //     shadowOffset: { width: 0, height: 1 },
  //     shadowOpacity:  8,
  //     shadowRadius: 4,
  //     elevation: 13,
  //     flexDirection:"row",
  //     marginTop:76,
  //     alignItems:"center",
  //     marginHorizontal:47
  //   }
});
