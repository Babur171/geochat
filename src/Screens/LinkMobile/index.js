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
export default  LinkMobile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../Assets/signup.png")}
        resizeMode="cover"
        style={styles.blurImageStyle}
      >
        <View
          style={[
            styles.titleContainer,styles.main
            
          ]}
        >
          <TouchableOpacity>
            <Image
              // @ts-ignore
              source={require("../../Assets/back.png")}
              style={styles.img}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: "400", marginLeft:97}}>
          Link Mobile
          </Text>
         
        </View>
        <View style={{marginLeft:154,marginTop:22,position:"relative"}}>
        <Image
              // @ts-ignore
              source={require("../../Assets/mobile.png")}
              style={[styles.img,{width:50,height:50, }]}
            />
            {/* <Image
              // @ts-ignore
              source={require("../../Assets/circle.png")}
              style={[styles.img,{width:32,height:32,position:"absolute",marginLeft:23,marginTop:15}]}
            />
            <Image
              // @ts-ignore
              source={require("../../Assets/ok.png")}
              style={[styles.img,{width:17,height:13,position:"absolute",marginTop:23,marginLeft:32}]}
            /> */}
        </View>
        <View>
          <Text style={{ marginTop: 45, marginLeft: 37,fontSize:20 }}>
          Linked Phone number: 186581666494
          </Text>
          
          <Text style={{ marginTop: 7, marginHorizontal: 47,fontSize:13 }}>
          After uploading your mobile contacts, you can see which mobile contacts also have an accounts.
          </Text>
        </View>
        <View style={{marginTop:350, marginHorizontal:64}}>
       <TouchableOpacity style={{width:261,height:42,backgroundColor:"#4285F4",justifyContent:"center", alignItems:"center",borderRadius:10}}>
        <Text style={{}}>Upload Contacts</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{width:261,height:42,backgroundColor:"#4285F4",justifyContent:"center", alignItems:"center",borderRadius:10,marginTop:6}}>
        <Text style={{}}>Change Mobile</Text>
       </TouchableOpacity>
       </View>
      </ImageBackground>
    </View>
  ); 
};
