import React, { useState } from "react"
import {
    View,
    Text,
    ImageBackground,
    Pressable,
    Image
} from "react-native"
import { styles } from "./styles";
import { Input } from "@/Components/TextInput";
import { Button } from "@/Components/Button";
import OTPInputView from '@twotalltotems/react-native-otp-input'

export const OTP = ({ navigation }) => {
    const [serachCountry, setSearchCountry] = useState("");


    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/resend.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={styles.mainStyle}>
                    <Pressable onPress={() => navigation.goBack()} style={styles.backStyle}>
                        <Image
                            source={require("../../Assets/back.png")}
                            style={styles.icon}
                        />
                    </Pressable>
                    <View style={{ marginHorizontal: 20, marginVertical: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.codeStyle}>My Code is</Text>
                        <Pressable style={styles.resendStyle}>
                            <Text style={styles.resendText}>RESEND</Text>
                        </Pressable>
                    </View>
                    <OTPInputView
                        style={{ width: '90%', height: 50 , marginHorizontal:20 , marginBottom:40}}
                        pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={[styles.underlineStyleBase]}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />
                     <View style={styles.buttonContainer}>
                        <Button
                            buttonText="Confirm"
                            style={styles.button}
                            backgroundColor="#4285F4"
                            textColor="#000"
                            hideShadow
                            onPress={() => navigation.navigate("signup")}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

