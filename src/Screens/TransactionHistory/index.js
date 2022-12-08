import React from "react"
import {
    View,
    Text,
    Pressable,
    Image,
} from "react-native"

import { styles } from "./styles";
export const TransactionHistory = ({ navigation }) => {

   

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Pressable><Image source={require(
                        // @ts-ignore
                        "../../Assets/back1.png")} style={styles.m12} />
                    </Pressable>
                    <Text style={[styles.text]}>No Transaction History</Text>
                    <Text />
                </View>
            </View>
           
        </View>
    );
};


