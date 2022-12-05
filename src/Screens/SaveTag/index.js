import React, { useState } from "react"
import {
    View,
    Text,
    Pressable,
    Image,
    ImageBackground,
    TextInput,
} from "react-native"

import { styles } from "./styles";
export const SaveTag = ({ navigation }) => {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const handleChange = async (text) => {
        setValue(text)
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/signup.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={{ fontSize: 17, color: "#000", textAlign: "center" }}>Save as Tag</Text>
                    <Text style={styles.done}>Save</Text>
                </View>
                <Text style={styles.text}>Tag Name</Text>
                <View style={styles.inputText}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row", }}>
                        <TextInput
                            // value={searchText}
                            onChangeText={(text) => handleChange(text)}
                            placeholder='Such as Family and Friends'
                            placeholderTextColor={"#000"}
                            style={{ paddingLeft: 10, opacity: 0.5, fontSize: 20 }}
                            editable={false}
                        />
                    </View>
                </View>
                <View style={styles.selectSection}>
                    <Pressable style={[styles.imgContainer, styles.shadow]}>
                        <Image source={{uri: 'dfg'}} style={styles.m10} />
                    </Pressable>
                    <Pressable style={[styles.imgContainer, styles.shadow]}><Image source={{uri: "fg"}} style={styles.m10} />
                    </Pressable>
                    <Pressable style={styles.imgContainer}><Image source={require(
                        // @ts-ignore
                        "../../Assets/plus1.png")} style={styles.m10} />
                    </Pressable>
                    <Pressable style={styles.imgContainer}><Image source={require(
                        // @ts-ignore
                        "../../Assets/minus.png")} style={styles.m10} />
                    </Pressable>
                </View>

            </ImageBackground>
        </View>
    );
};
