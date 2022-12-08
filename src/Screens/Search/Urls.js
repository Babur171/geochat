import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

let data = [1, 2, 3, 4, 5, 6];

export const UrlComponent = () => {
  return data.map((item, index) => {
    return (
      <View index={index} style={styles.urlMainContainer}>
        <View style={styles.urlContainer} />
        <Text style={styles.urlText}>
          {`URL ..................................................`}
        </Text>
      </View>
    );
  });
};
