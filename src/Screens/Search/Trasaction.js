import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const TrasactionComponent = () => {
  return [1, 2, 3, 4].map(() => {
    return (
      <View style={styles.trasactionMainContainer}>
        <View style={styles.trasactionContainer} />
        <View style={styles.row}>
          <View style={{ paddingLeft: 12 }}>
            <Text style={styles.trBankTitle}>{`Bank Name or Sender Name`}</Text>
            <Text style={styles.trMessage}>{`Massage  Somthing ......`}</Text>
          </View>
          <View>
            <Text style={styles.trAmmount}>{`200 $`}</Text>
            <Text style={styles.trDate}>{`12 Nov`}</Text>
          </View>
        </View>
      </View>
    );
  });
};
