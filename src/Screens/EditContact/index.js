import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Button } from "@/Components/Button";
import { Input } from "@/Components/TextInput";
import { Images } from "@/Theme/Images";
const EditContact = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            // @ts-ignore
            source={Images.Back}
            style={styles.BackBtn}
          />
        </TouchableOpacity>
        <Text style={styles.description}>Edit Contact</Text>
        <TouchableOpacity>
          <Text style={styles.doneStyle}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.share}>Share Contact</Text>

        <Text style={styles.label}>Remark</Text>

        <Input style={styles.input} onChangeText={() => console.log("eee")} />
        <Text style={styles.label}>Tags</Text>

        <Input style={styles.input} onChangeText={() => console.log("eee")} />
        <Text style={styles.label}>Mobile</Text>

        <Input style={styles.input} onChangeText={() => console.log("eee")} />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={styles.Description}>Description</Text>
        <View style={styles.viewStyle}>
          <Input
            style={styles.descriptionStyle}
            onChangeText={() => console.log("eee")}
            placeholder=" Enter more information"
          />
          <View
            style={{ borderWidth: 0.2, marginHorizontal: 30, opacity: 0.3 }}
          ></View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../Assets/cam.png")}
              style={styles.cam}
            />
            <Text style={{ marginTop: 74, marginLeft: 10 }}>
              Click to add photo
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditContact;
