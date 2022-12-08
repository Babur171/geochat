import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ab4f8",
  },
  headerImage: {
    alignSelf: "center",
    width: 85,
    height: 77,
    marginTop: 50,
    marginBottom: 19,
  },
  transferAmmountWrapper: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 21,
  },
  transferAmmountText: {
    paddingBottom: 12,
    fontWeight: 400,
    fontSize: 15,
  },
  transferAmmountText$: {
    fontWeight: 400,
    fontSize: 25,
  },
  addNoteText: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  transferButton: {
    backgroundColor: "#39F229B7",
    position: "absolute",
    bottom: 36,
    right: 24,
    paddingHorizontal: 31,
    paddingVertical: 21,
    width: 129,
  },
});
