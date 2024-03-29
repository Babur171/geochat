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
export const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [validationError, setValidationError] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });



    const handleInputEmail = (value) => {
        setEmail(value)
        resetValidations()
    }

    const handleInputPassword = (value) => {
        setPassword(value)
        resetValidations()
    }

    const handleInputConfirmPassword = (value) => {
        setConfirmPassword(value)
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
                        <Text style={styles.headingText}>Sign up by phone number</Text>
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
                    <View>
                        <Input
                            placeholder='Enter password'
                            onChangeText={handleInputConfirmPassword}
                            errorText={validationError.password}
                            secure={true}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                        buttonWidth={320}
                            buttonText="Sign Up"
                            style={styles.button}
                            backgroundColor="#4285F4"
                            textColor="#000"
                            hideShadow
                            onPress={() => navigation.navigate("Security")}
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
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

