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
    paddingVertical: 14,
    justifyContent: "space-between",
    paddingHorizontal: 15,
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
  },
  newFrendText: {
    // marginLeft: 23,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "400",
    color: "#000",
  },
  lineText: {
    fontSize: 15,
    lineHeight: 19,
    fontWeight: "400",
    color: "#000",
    marginLeft:20
  },
  AddContactStyle: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "400",
    color: "#000",
  },
  linkStyle: {
    marginTop: 10,
    borderRadius:4,
    backgroundColor:'#F5F5F5',
    marginHorizontal: 14,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
  },
  card: {
    backgroundColor: "#fff",
    paddingTop: 13,
    marginTop: 10,
    marginHorizontal: 14,
    width:'82%',
  },

  plusIcon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  searchIocn: {
    resizeMode: "contain",
    width: 26,
    height: 26,
  },
  mobileText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 25,
    color: "#000",
  },
  boxStyle:{
    height: 50,
    width: 58,
    // backgroundColor: "#D9E7FD",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,

    // elevation: 6,
  },
  firstBoxRow:{
    marginBottom: 10,
    flexDirection:'row', 
    alignItems:'center'
  },
  firstBoxImg:{
    height:52,
    width:59,
    borderRadius:10
  },
  lastText: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "700",
    color: "#000",
  },
  subText:{
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "700",
    color: "#000",
    opacity:0.5
  },
  imageBox:{
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom:10
  }
});
