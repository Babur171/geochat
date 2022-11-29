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
    borderWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 8,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 10,
    backgroundColor: "#FFFFF",
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
    marginLeft: 23,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "400",
    color: "#000",
  },
  AddContactStyle: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "400",
    color: "#000",
  },
  linkStyle: {
    marginTop: 11,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "400",
    color: "#000",
    marginHorizontal: 32,
  },
  card: {
    backgroundColor: "#fff",
    paddingTop: 13,
    paddingBottom: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3,

    elevation: 7,
    flexDirection: "row",
    marginTop: 63,
    alignItems: "center",
    marginHorizontal: 47,
  },

  phoneImg: {
    resizeMode: "contain",
    width: 24,
    height: 24,
  },
  mobileText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 25,
    color: "#000",
  },
  boxStyle:{
    flexDirection:'row',
    marginLeft:32
  }
});
