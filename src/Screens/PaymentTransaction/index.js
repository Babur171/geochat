import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Transaction = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../Assets/bowan.png")}
        style={styles.headerImage}
      />
      <View style={styles.transferAmmountWrapper}>
        <Text style={styles.transferAmmountText}>{`Transfer amount`}</Text>
        <Text style={styles.transferAmmountText$}>{`$ `}</Text>
      </View>
      <Text style={styles.addNoteText}>{`Add note`}</Text>
        <TouchableOpacity
          style={styles.transferButton}
          onPress={() => {}}
        >
          <Text>Transfer</Text>
        </TouchableOpacity>
    </View>
  );
};
