import React from "react";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#BBD3FB",
  },

  BackBtn: {
    resizeMode: "contain",
    width: 14,
    height: 14,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 22,
    marginRight: 15,
  },

  description: {
    fontSize: 17,
    color: "#000000",
    lineHeight: 21,
    fontWeight: "400",
  },
  doneStyle: {
    backgroundColor: "#C9DCFC",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
  },
  share: {
    marginLeft: 131,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "400",
    color: "#000",
    marginBottom: 5,
  },
  label: {
    marginLeft: 21,
    marginBottom: 7,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "400",
    color: "#000",
  },
  input: {
    backgroundColor: "#C9DCFC",
    marginLeft: 21,
    marginRight: 38,
    marginBottom: 19,
    borderWidth: 0,
  },
  Description: {
    marginTop: 49,
    marginBottom: 7,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "400",
    color: "#000",
  },
  viewStyle: {
    width: 331,
    height: 194,
    backgroundColor: "#C9DCFC",
    borderRadius: 5,
  },
  descriptionStyle: {
    marginHorizontal:18,
    borderWidth:0,
    paddingBottom:5
  },
  cam: {
    width: 19,
    height: 15,
    marginTop: 74,
    marginLeft: 100,
  },
});
