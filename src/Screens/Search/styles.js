import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ab4f8",
    paddingHorizontal: 10,
  },
  searchBarView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth,
    height: 40,
    marginTop: 40,
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: "#aec8f3",
    width: screenWidth - 100,
    height: "100%",
    borderWidth: 0,
    borderRadius: 0,
  },
  cancleButton: {
    backgroundColor: "#8ab4f8",
    width: screenWidth - 300,
    height: "100%",
  },
  fileMianContainer: {
    backgroundColor: "white",
    height: screenHeight - 200,
    paddingVertical: 10,
  },
  fileContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  contentStyle: {
    alignSelf: "center",
    opacity: 0.3,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    paddingBottom: 10,
  },
  fileBox: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    width: 106,
    height: 109,
    margin: 5,
  },
  urlMainContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginBottom: 9,
    marginHorizontal: 20,
  },
  urlContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 6,
    width: 63,
    height: 67,
  },
  urlText: {
    paddingLeft: 22,
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
  },
  trasactionMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 8,
    marginHorizontal: 10,
  },
  trasactionContainer: {
    backgroundColor: "white",
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  row: { flex: 1, justifyContent: "space-between", flexDirection: "row" },
  trBankTitle: {
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 15,
    paddingBottom: 3,
  },
  trMessage: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
  },
  trAmmount: {
    fontWeight: 700,
    fontSize: 10,
    lineHeight: 12,
    paddingBottom: 8,
  },
  trDate: {
    fontWeight: 400,
    fontSize: 8,
    lineHeight: 10,
  },
});
