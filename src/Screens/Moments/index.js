import React from "react"

import {
    View,
    Text,
    Pressable,
    Image,
    ImageBackground,
    FlatList,
    StyleSheet,
} from "react-native"
import { ScrollView } from "react-native-gesture-handler";

import { styles } from "./styles";
export const Moments = ({ navigation }) => {

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
    ]

    const data1 = [
        {
            id: 1,
            image: require("../../Assets/Rectangle1.png")

        },]
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/moments.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back.png")} style={styles.m13} />
                    </Pressable>
                    <Text />
                </View>
                <Pressable style={{ alignSelf: "flex-end", marginRight: 10 }}><Image source={require(
                    // @ts-ignore
                    "../../Assets/camera.png")} style={styles.m12} />
                </Pressable>

                <View style={{ alignSelf: "flex-end", marginTop: 50, paddingHorizontal: 15 }}>
                    <Pressable style={styles.walletCard}>
                        <View style={styles.walletInner}>
                            <View style={styles.walletCarder}>
                                <Text style={styles.eventName}>Durus</Text>
                            </View>
                            <View style={styles.imgContainer}>
                                <Image source={require(
                                    // @ts-ignore
                                    "../../Assets/dorus.png")} style={styles.image1} />
                            </View>
                        </View>
                    </Pressable>
                </View>
                <View style={{ alignSelf: "flex-start", marginTop:20 }}>
                    <Pressable style={styles.walletCard}>
                        <View style={styles.walletInner}>

                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/jumia.png")} style={styles.image2} />

                            <View style={styles.walletCarder}>
                                <Text style={styles.eventName}>朱米亚产品</Text>
                                <Text style={styles.subtitle}>在 jumia 中以较小的价格购买您的产品</Text>
                            </View>

                        </View>
                    </Pressable>
                </View>

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
                <Text style={styles.postTime}>31 mins ago</Text>
                <View style={{ alignSelf: "flex-start", marginTop: 30 }}>
                    <Pressable style={styles.walletCard}>
                        <View style={styles.walletInner}>

                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/jumia.png")} style={styles.image2} />

                            <View style={styles.walletCarder}>
                                <Text style={styles.eventName}>朱米亚产品</Text>
                                <Text style={styles.subtitle}>在 jumia 中以较小的价格购买您的产品</Text>
                            </View>

                        </View>
                    </Pressable>
                </View>
                <View style={styles.productsContainer}>
                    <Pressable onPress={() => navigation.navigate()} style={{ alignSelf: "flex-start" }}>
                        <Image source={require("../../Assets/Rectangle1.png")} style={ImgStyles.image} />
                    </Pressable>
                </View>
                <Text style={styles.postTime}>31 mins ago</Text>
                <View style={{ alignSelf: "flex-start", marginTop: 30 }}>
                    <Pressable style={styles.walletCard}>
                        <View style={styles.walletInner}>

                            <Image source={require(
                                // @ts-ignore
                                "../../Assets/jumia.png")} style={styles.image2} />

                            <View style={styles.walletCarder}>
                                <Text style={styles.eventName}>朱米亚产品</Text>
                                <Text style={styles.subtitle}>在 jumia 中以较小的价格购买您的产品</Text>
                            </View>

                        </View>
                    </Pressable>
                </View>
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
                <Text style={styles.postTime}>31 mins ago</Text>

            </ImageBackground>
        </View>
    );
};



const Product = ({ product, navigation }) => (
    <Pressable onPress={() => navigation.navigate()} style={{ alignSelf: "flex-start" }}>
        <Image source={product.image} style={ImgStyles.image} />
    </Pressable>
)


export const ImgStyles = StyleSheet.create({
    image: { width: 88, height: 88, resizeMode: "contain", marginTop: 5, }
})