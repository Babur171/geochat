import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
    FlatList,

} from "react-native"

import { styles } from "./styles";
export const ChooseImage = ({ navigation }) => {

    const data = [
        {
            id: 1,
            image: require("../../Assets/Rectangle1.png")

        },
        {
            id: 2,
            image: require("../../Assets/Rectangle2.png")


        },
        {
            id: 3,
            image: require("../../Assets/Rectangle3.png")

        },
        {
            id: 4,
            image: require("../../Assets/Rectangle4.png")

        },
        {
            id: 5,
            image: require("../../Assets/Rectangle5.png")


        },
        {
            id: 6,
            image: require("../../Assets/Rectangle6.png")

        },
        {
            id: 7,
            image: require("../../Assets/Rectangle7.png")

        },
        {
            id: 8,
            image: require("../../Assets/Rectangle8.png")


        },
        {
            id: 9,
            image: require("../../Assets/Rectangle9.png")

        },
        {
            id: 10,
            image: require("../../Assets/Rectangle10.png")

        },
        {
            id: 11,
            image: require("../../Assets/Rectangle11.png")


        },
        {
            id: 12,
            image: require("../../Assets/Rectangle12.png")

        }]

    return (
        <View style={styles.container}>
            <View style={[styles.inputText]}>
                <Pressable onPress={()=>navigation.goBack()}><Image source={require(
                    // @ts-ignore
                    "../../Assets/back.png")} style={styles.m12} />
                </Pressable>
                <Text style={{ fontSize: 17, color: "#000", marginLeft: 20 }}>All images</Text>
                <Text />
            </View>

            <View style={styles.productsContainer}>
                <FlatList
                    data={data}
                    numColumns={3}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Product product={item} navigation={navigation} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>


        </View>
    );
};

const Product = ({ product, navigation }) => (
    <View style={{ paddingHorizontal: 5 }}>
    <View style={{ marginVertical: 5 }}>
      <Image source={product.image} style={{ width: 101, height: 107 }} />
    </View>
  </View>
    // <Pressable onPress={() => navigation.navigate()}>
    //     <Image source={product.image} style={ImgStyles.image} />
    // </Pressable>
)


export const ImgStyles = StyleSheet.create({
    image: { width: 101, height: 107, resizeMode: "contain" }
})
