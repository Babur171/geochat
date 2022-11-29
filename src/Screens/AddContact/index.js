import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { Button } from "@/Components/Button";
import { styles } from "./styles";
import { Input } from "@/Components/TextInput";
import { Images } from "@/Theme/Images";

export default AddContact = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.SignupBackground}
        resizeMode="cover"
        style={styles.blurImageStyle}
      >
        <View style={[styles.main]}>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image
              source={Images.Back}
              style={styles.img}
            />
          </TouchableOpacity>
          <Text style={styles.newFrendText}>
            New Friends
          </Text>
          </View>
         
          <TouchableOpacity>
            <Text style={styles.AddContactStyle}>
              Add Contacts
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.linkStyle}>
            You can link your mobile to find more friemd
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.boxStyle}>
          <Image
            source={Images.Phone}
            style={styles.phoneImg}
          />
          <Text style={styles.mobileText}>
            Mobile Contacts
          </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
