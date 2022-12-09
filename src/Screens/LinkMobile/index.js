import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  ImageBackground,
  Modal
} from "react-native";
import { Button } from "@/Components/Button";
import { styles } from "./styles";
import { Input } from "@/Components/TextInput";
export default  LinkMobile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../Assets/signup.png")}
        resizeMode="cover"
        style={styles.blurImageStyle}
      >
        <View
          style={[
            styles.main
            
          ]}
        >
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image
              // @ts-ignore
              source={require("../../Assets/back.png")}
              style={styles.img}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: "400",}}>
          Link Mobile
          </Text>
         <View></View>
        </View>
        <View style={{alignItems:'center',marginTop:22,}}>
        <Image
              // @ts-ignore
              source={require("../../Assets/mobile.png")}
              style={[styles.mobileImg]}
            />
        </View>
        <View>
          <Text style={{ marginTop: 45, marginLeft: 37,fontSize:20 }}>
          Linked Phone number: 186581666494
          </Text>
          <Text style={{ marginTop: 7, textAlign:'center',marginHorizontal:47, fontSize:13 }}>
          After uploading your mobile contacts, you can see which mobile contacts also have an accounts.
          </Text>
        </View>
        <View style={{marginTop:350, marginHorizontal:64}}>
       <TouchableOpacity  onPress={()=>setModalVisible(true)} style={{width:261,height:42,backgroundColor:"#4285F4",justifyContent:"center", alignItems:"center",borderRadius:10}}>
        <Text style={{}}>Upload Contacts</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate("PhoneVerification")} style={{width:261,height:42,backgroundColor:"#4285F4",justifyContent:"center", alignItems:"center",borderRadius:10,marginTop:6}}>
        <Text style={{}}>Change Mobile</Text>
       </TouchableOpacity>
       </View>
      </ImageBackground>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalStyle}>
          <View
            style={{
              backgroundColor: "black",
              marginHorizontal: 30,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                alignItems: "center",
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
            >
              <View style={{marginBottom:20}}>
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 21,
                  fontWeight: "400",
                  color: "white",
                }}
              >
                Note
              </Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 19,
                  fontWeight: "400",
                  color: "white",
                }}
              >
                {"Do you want to find out who has registered an account? Yourcontacts data will be encryptedand won’t be shared to any third party"}
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent:'space-between' }}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  paddingTop: 10,
                  paddingBottom: 14,
                  paddingHorizontal: 40,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 15,
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingTop: 10,
                  paddingBottom: 14,
                  paddingHorizontal: 40,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 15,
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  ); 
};
