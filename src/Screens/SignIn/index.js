import React, { useState } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    Image,
    ImageBackground
} from "react-native"
import { Button } from "@/Components/Button";
import { styles } from "./styles";
import { Input } from "@/Components/TextInput";
export const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const [validationError, setValidationError] = useState({
        email: "",
        password: "",
    });



    const handleInputEmail = (value) => {
        setEmail(value)
        resetValidations()
    }

    const handleInputPassword = (value) => {
        setPassword(value)
        resetValidations()
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../Assets/signup.png")} resizeMode="cover" style={styles.blurImageStyle}>
                <View style={styles.heading}>
                    <Pressable onPress={()=>navigation.navigate("Language")}>
                    <Text style={styles.language}>Language</Text>
                    </Pressable>
                    <View style={styles.titleContainer}>
                        <Text style={styles.headingText}>Login</Text>
                        <Image
                            // @ts-ignore
                            source={require("../../Assets/User.png")}
                            style={styles.icon}
                        />
                    </View>
                </View>
                <View style={{marginTop: 100}}>
                    <View style={styles.mr10}>
                        <Input
                            placeholder='Enter Name'
                            onChangeText={handleInputEmail}
                            errorText={validationError.email}
                        />
                    </View>
                    <View style={styles.mr10}>
                        <Input
                            placeholder='Enter email'
                            onChangeText={handleInputPassword}
                            errorText={validationError.password}
                            secure={true}
                        />
                    </View>
                    <Pressable onPress={()=>navigation.navigate("OTP")}>
                    <Text style={styles.forgetText}>Forget Password ?</Text>
                    </Pressable>

                    <View style={styles.buttonContainer}>
                        <Button
                        buttonWidth={320}
                            buttonText="Login"
                            style={styles.button}
                            backgroundColor="#4285F4"
                            textColor="#000"
                            hideShadow
                            onPress={() => navigation.navigate("signup")}
                        />
                    </View>

                    <View style={styles.orContainer}>
                        <View style={styles.line} />
                        <Text style={styles.orText}>Or Continue With</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.imageContainer}>
                        <Pressable style={styles.iconContainer} onPress={{}}>
                            <Image
                                // @ts-ignore
                                source={require("../../Assets/googleLogo.png")}
                                style={styles.icon}
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Not register yet ? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.loginText}>Create Account?</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

