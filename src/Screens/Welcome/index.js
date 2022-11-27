import React,{useEffect} from "react";
import {
    View,
    Image,
} from "react-native";
import { styles } from "./styles";
import { Button } from "@/Components/Button";

const Welcome = ({ navigation }) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate("GetStart")
        }, 1000);
       
    },[])
    return (
        <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Image
                        // @ts-ignore
                        source={require("../../Assets/welcomeImg.png")}
                        style={styles.logo}
                    />
                   
                </View>

        </View>
    );
};


export default Welcome;

