import React from "react";
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#BBD3FB"
  },
  description: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
    fontWeight: '400'

  },
  logo: {
    width: 12,
    height: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:24,
    marginVertical:20
  }
});
