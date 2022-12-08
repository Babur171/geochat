
import { View, StyleSheet, Image, Pressable, FlatList, Text, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { styles } from './styles';
export const ChooseImageVideo = ({ navigation }) => {

    const [categoriesList, setCategoriesList] = useState([]);
    const categoryImages = [
        { id: 1, image: require("../../Assets/Rectangle1.png") },
        { id: 2, image: require("../../Assets/Rectangle2.png") },
        { id: 3, image: require("../../Assets/Rectangle3.png") },
        { id: 4, image: require("../../Assets/Rectangle4.png") },
        { id: 5, image: require("../../Assets/Rectangle5.png") },
        { id: 6, image: require("../../Assets/Rectangle6.png") },
        { id: 7, image: require("../../Assets/Rectangle7.png") },
        { id: 8, image: require("../../Assets/Rectangle8.png") },
        { id: 9, image: require("../../Assets/Rectangle9.png") },
        { id: 10, image: require("../../Assets/Rectangle10.png") },
        { id: 11, image: require("../../Assets/Rectangle11.png") },
        { id: 12, image: require("../../Assets/Rectangle12.png") }
    ]

    useEffect(() => {
        setCategoriesList(categoryImages)
    }, [])



    const handleSelectCategory = (item, item_index) => {
        const newState = categoriesList.map((obj, index) => {
            if (index == item_index) {
                if (obj.isSelected) {
                    return { ...obj, isSelected: false };
                }
                if (!obj.isSelected) {
                    return { ...obj, isSelected: true };
                }
            }
            return obj;
        });
        setCategoriesList(newState);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable><Image source={require(
                    // @ts-ignore
                    "../../Assets/cross.png")} style={styles.m12} />
                </Pressable>
                <View style={styles.subheader}>
                    <Text style={styles.pickText}>Photos/Video</Text>
                    <Image source={require(
                        // @ts-ignore
                        "../../Assets/dropdown.png")} style={styles.down} />
                </View>
                <Text style={styles.done}>Send</Text>
            </View>


            <FlatList
                style={styles.courseList}
                data={categoriesList}
                renderItem={({ item, index }) => <Category category={item} index={index} handleSelectCategory={handleSelectCategory} />}
                numColumns={3}
                keyExtractor={item => item.id.toString()}
                columnWrapperStyle={styles.columnWrapper}
            />
            <View style={styles.footer}>
                <Footer />
            </View>

        </View>
    )
}




const Category = ({ category, index, handleSelectCategory }) => {
    return (
        <ImageBackground style={courseStyles.container} source={category.image}>
            <Pressable onPress={() => handleSelectCategory(category, index)}>
                <Image source={category.isSelected ? require("../../Assets/checkcircle.png") : require("../../Assets/uncheckcircle.png")} style={courseStyles.image} />
            </Pressable>
        </ImageBackground>
    );
};

const courseStyles = StyleSheet.create({
    container: {
        marginBottom: 10,
        height: 107,
        width: 101,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    image: { height: 29, width: 29, resizeMode: 'contain', marginRight: 8, marginTop: 2 },
    text: { color: "#989DA0", textAlign: 'center' }

});


const Footer = props => {

    return (
        <View style={[footerStyles.footer]}>
            <Pressable>
                <Text style={footerStyles.footerItem}>Preview</Text>
            </Pressable>
            <View style={{ flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",}}>
            <Image source={require(
                        // @ts-ignore
                        "../../Assets/bluecircle.png")} style={styles.down} />
            <Text style={[footerStyles.footerItem, {color: "#000"}]}>Full Image</Text>
            </View>
          
            <Text/>
        </View>
    );
};

const footerStyles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 59,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "#7facf7"
    },
    footerItem: {
        paddingHorizontal: 10, paddingVertical: 5, fontSize: 15
    },

});
