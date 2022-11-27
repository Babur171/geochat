import React from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
} from "react-native";
import { styles } from "./styles";
import { Button } from "@/Components/Button";

export default GetStart = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/welcome.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={styles.titleContainer}>
                    <Image
                        // @ts-ignore
                        source={require("../../Assets/logo.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.description}>
                        uick Chat App
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonWidth={320}
                        buttonText="Lets Start"
                        style={styles.button}
                        backgroundColor="#4285F4"
                        textColor="#000"
                        hideShadow
                        onPress={() => navigation.navigate("SignIn")}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};


