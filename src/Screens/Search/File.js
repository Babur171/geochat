import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

let data = [1, 2, 3];
export const FileComponent = () => {
  return (
    <View style={styles.fileMianContainer}>
      <View style={styles.fileContainer}>
        {data?.map((item, index) => (
          <View index={index} style={styles.fileBox}></View>
        ))}
      </View>
      <View style={styles.fileContainer}>
        {data?.map((item, index) => (
          <View index={index} style={styles.fileBox}></View>
        ))}
      </View>
      <View style={styles.fileContainer}>
        {data?.map((item, index) => (
          <View index={index} style={styles.fileBox}></View>
        ))}
      </View>
      <View style={styles.fileContainer}>
        {data?.map((item, index) => (
          <View index={index} style={styles.fileBox}></View>
        ))}
      </View>
    </View>
  );
};
