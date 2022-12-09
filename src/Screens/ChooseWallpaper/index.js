import React, { useState } from "react";
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

const ChooseWallpaper = ({ navigation }) => {
  //   const [dataa, setDataa] = useState([])
  const data = [
    { image: require("../../Assets/Rectangle5.png") },
    { image: require("../../Assets/Rectangle6.png") },
    { image: require("../../Assets/Rectangle7.png") },
    { image: require("../../Assets/Rectangle2.png") },
    { image: require("../../Assets/Rectangle4.png") },
    { image: require("../../Assets/Rectangle3.png") },
    { image: require("../../Assets/Rectangle5.png") },
    { image: require("../../Assets/Rectangle1.png") },
    { image: require("../../Assets/Rectangle7.png") },
    { image: require("../../Assets/Rectangle8.png") },
    { image: require("../../Assets/Rectangle9.png") },
    { image: require("../../Assets/Rectangle10.png") },
    { image: require("../../Assets/Rectangle6.png") },
    { image: require("../../Assets/Rectangle7.png") },
    { image: require("../../Assets/Rectangle2.png") },
    { image: require("../../Assets/Rectangle4.png") },
    { image: require("../../Assets/Rectangle3.png") },
    { image: require("../../Assets/Rectangle5.png") },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <View style={{ marginVertical: 5 }}>
          <Image source={item.image} style={{ width: 101, height: 107 }} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            // @ts-ignore
            source={require("../../Assets/back1.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.description}>Choose a wallpaper</Text>
        <View></View>
      </View>
      <View style={{ marginHorizontal: 30,flex:1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          numColumns={3}
        />
      </View>
    </View>
  );
};

export default ChooseWallpaper;
