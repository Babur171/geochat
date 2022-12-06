import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Button } from "@/Components/Button";
import { Input } from "@/Components/TextInput";
import { Images } from "@/Theme/Images";
import { styles } from "../Contacts/styles";

export default Contacts = ({ navigation }) => {
  const data=[
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ]
  return (
    <View style={styles.container}>
      <View style={[styles.main]}>
        <View></View>
        <View>
          <Text style={styles.newFrendText}>Contacts</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Image source={Images.Search} style={styles.searchIocn} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("AddContact")}>
            <Image source={Images.Plus} style={styles.plusIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.linkStyle}>
          <View style={{ marginVertical: 12, marginLeft: 17 }}>
            <View style={styles.firstBoxRow}>
              <Image source={Images.PlusPerson} style={styles.boxStyle} />
              <Text style={styles.lineText}>New Friends</Text>
            </View>
            <View style={styles.firstBoxRow}>
              <Image source={Images.PersonCirle} style={styles.boxStyle} />
              <Text style={styles.lineText}>Chats only Friends</Text>
            </View>
            <View style={styles.firstBoxRow}>
              <Image source={Images.BothPerson} style={styles.boxStyle} />
              <Text style={styles.lineText}>Group Chats</Text>
            </View>
            <View style={styles.firstBoxRow}>
              <Image source={Images.Tags} style={styles.boxStyle} />
              <Text style={styles.lineText}>Tags</Text>
            </View>
            <View style={styles.firstBoxRow}>
              <Image source={Images.OnePerson} style={styles.boxStyle} />
              <Text style={styles.lineText}>Official Accounts</Text>
            </View>
            <View style={styles.firstBoxRow}>
              <Image source={Images.OnePerson} style={styles.boxStyle} />
              <Text style={styles.lineText}>Official Accounts</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={{alignItems:'center'}}>
        <View style={{ flexDirection:'row',}}>
      <View style={styles.card}>
        <View
          style={styles.imageBox}
        >
          <Image source={Images.Rectangle1} style={styles.firstBoxImg} />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.lastText}>Aokuley bary</Text>
            <Text style={styles.subText}>Halo</Text>
          </View>
        </View>
        <View
          style={styles.imageBox}
        >
          <Image source={Images.Rectangle1} style={styles.firstBoxImg} />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.lastText}>Aokuley bary</Text>
            <Text style={styles.subText}>Halo</Text>
          </View>
        </View>
        <View
          style={styles.imageBox}
        >
          <Image source={Images.Rectangle1} style={styles.firstBoxImg} />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.lastText}>Aokuley bary</Text>
            <Text style={styles.subText}>Halo</Text>
          </View>
        </View>
        <View
          style={styles.imageBox}
        >
          <Image source={Images.Rectangle1} style={styles.firstBoxImg} />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.lastText}>Aokuley bary</Text>
            <Text style={styles.subText}>Halo</Text>
          </View>
        </View>
        <View
          style={styles.imageBox}
        >
          <Image source={Images.Rectangle1} style={styles.firstBoxImg} />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.lastText}>Aokuley bary</Text>
            <Text style={styles.subText}>Halo</Text>
          </View>
        </View>
        <View
          style={styles.imageBox}
        >
          <Image source={Images.Rectangle1} style={styles.firstBoxImg} />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.lastText}>Aokuley bary</Text>
            <Text style={styles.subText}>Halo</Text>
          </View>
        </View>
        <View
          style={styles.imageBox}
        >
          <Image source={Images.Rectangle1} style={styles.firstBoxImg} />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.lastText}>Aokuley bary</Text>
            <Text style={styles.subText}>Halo</Text>
          </View>
        </View>
        <View
          style={styles.imageBox}
        >
          <Image source={Images.Rectangle1} style={styles.firstBoxImg} />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.lastText}>Aokuley bary</Text>
            <Text style={styles.subText}>Halo</Text>
          </View>
        </View>
        <View
          style={styles.imageBox}
        >
          <Image source={Images.Rectangle1} style={styles.firstBoxImg} />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.lastText}>Aokuley bary</Text>
            <Text style={styles.subText}>Halo</Text>
          </View>
        </View>
        <View
          style={styles.imageBox}
        >
          <Image source={Images.Rectangle1} style={styles.firstBoxImg} />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.lastText}>Aokuley bary</Text>
            <Text style={styles.subText}>Halo</Text>
          </View>
        </View>
      </View>
      <View style={{width:'12%',marginTop:20}}>
        {
          data.map((item)=>(
<Text style={styles.lineText}>{item}</Text>
          ))
        }
      
      </View>
      </View>
      </ScrollView>
    </View>
  );
};
