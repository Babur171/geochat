import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const MiniPrograms = () => {
  return [1, 2, 3, 4].map(() => {
    return (
      <View style={styles.trasactionMainContainer}>
        <View style={styles.trasactionContainer} />
        <View style={styles.row}>
          <View style={{ paddingLeft: 12 }}>
            <Text style={styles.trBankTitle}>{`Sender Name`}</Text>
            <Text style={styles.trMessage}>{`Project Name`}</Text>
          </View>
          <View>
            <Text style={styles.trAmmount}>{`Today`}</Text>
          </View>
        </View>
      </View>
    );
  });
};
