import React from "react"
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
    FlatList,
} from "react-native"

import { styles } from "./styles";
export const SelectBank = ({ navigation }) => {

    const data = [
        {id: 1, title: "UBA"},
        {id: 2, title: "POLARIS BANK"},
        {id: 3, title: "FIRST BANK"},
        {id: 4, title: "POLARIS BANK"},
        {id: 5, title: "UNION BANK"},
        {id: 6, title: "ABC"},
        {id: 7, title: "CCB"},
        {id: 8, title: "UBA"},
        {id: 9, title: "POLARIS BANK"},
        {id: 10, title: "FIRST BANK"},
        {id: 11, title: "POLARIS BANK"},

    ]

   




    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={[styles.text, { fontSize: 20 }]}>Select Bank</Text>
                    <Text />
                </View>
            </View>
            <Text style={[styles.text, {opacity: 0.3, marginLeft: 20, marginTop: 10}]}>Frequently used bank</Text>
            <View style={styles.productsContainer}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Bank bank={item} navigation={navigation} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};


const Bank = ({ bank, navigation }) => (
    <Pressable onPress={() => navigation.navigate()}>
        <Text style={ImgStyles.text}>{bank.title}</Text>
    </Pressable>
)


export const ImgStyles = StyleSheet.create({
    text: { color: "#000", fontSize: 18, paddingTop: 5 }
})

