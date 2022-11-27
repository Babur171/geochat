import React, { useState } from "react"
import { useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    Switch,
    TextInput,
    FlatList,
} from "react-native"

import { styles } from "./styles";
export const PhotosAndVideos = ({ navigation }) => {

    const handleChange = async (text) => {
        setValue(text)
    }

    const data = [
        {
            id: 1,
            image: require("../../Assets/1s.png")

        },
        {
            id: 2,
            image: require("../../Assets/2s.png")


        },
        {
            id: 3,
            image: require("../../Assets/3s.png")

        }]




    return (
        <View style={styles.container}>
            <View style={[styles.inputText, { paddingHorizontal: 20, paddingVertical: 10 }]}>
                <Image source={require(
                    // @ts-ignore
                    "../../Assets/back.png")} style={styles.m12} />
                <Text style={{ fontSize: 17, color: "#000" }}>Photos and Videos</Text>
                <Text style={{ fontSize: 17, color: "#000" }}>Select</Text>
            </View>
            <View style={styles.searchBar}>
                <Image source={require(
                    // @ts-ignore
                    "../../Assets/search.png")} style={[styles.m12, { opacity: 0.3 }]} />
                <TextInput
                    // value={searchText}
                    onChangeText={(text) => handleChange(text)}
                    placeholder='Search by image description or text contained'
                    placeholderTextColor={"#b8c4d7"}
                    style={{ paddingLeft: 10 }}
                />
            </View>

            <Text style={{ fontSize: 15, color: "#000", paddingHorizontal: 20, paddingVertical: 15 }}>This month</Text>
            <View style={styles.productsContainer}>
                <FlatList
                    data={data}
                    numColumns={3}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Product product={item} navigation={navigation} />}
                    columnWrapperStyle={{
                        justifyContent: 'space-around'
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </View>
    );
};


const Product = ({ product, navigation }) => (
    <Pressable onPress={() => navigation.navigate()}>
        <Image source={product.image} style={ImgStyles.image} />
    </Pressable>
)


import { StyleSheet } from "react-native";

export const ImgStyles = StyleSheet.create({
    image: { width: 101, height: 90, resizeMode: "contain" }
})