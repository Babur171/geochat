import React from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { styles } from "./style";
import { Button } from "@/Components/Button";

const Security = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/securityBg.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image
                        // @ts-ignore
                        source={require("../../Assets/cross.png")}
                        style={[styles.logo,{width:22,height:22,resizeMode:'contain',marginLeft:29,marginTop:69}]}
                    />
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',marginTop:108}}>
                        <TouchableOpacity onPress={()=>navigation.navigate("OTP")}>
                    <Image
                        // @ts-ignore
                        source={require("../../Assets/not.png")}
                        style={[styles.logo,{width:40,height:40,resizeMode:'contain',marginLeft:31}]}
                    />
                    </TouchableOpacity>
                    <Text style={[styles.description,{marginLeft:22,fontSize:23,fontWeight:"700",color:'black'}]}>
                        Security Verification
                    </Text>
                    </View>
                    <View style={{marginHorizontal:59,marginTop:26}}>
                    <Text style={{fontSize:13,fontWeight:"400",lineHeight:16}}>
                    For the security of your account, verify security verification code before 
                    </Text>
                    </View>
                </View>

                {/* <View style={styles.buttonContainer}>
                    <Button
                        buttonText="Lets Start"
                        style={styles.button}
                        backgroundColor="#4285F4"
                        textColor="#000"
                        hideShadow
                        onPress={() => navigation.navigate("SignIn")}
                    />
                </View> */}
            </ImageBackground>

        </View>
    );
};


export default Security;

