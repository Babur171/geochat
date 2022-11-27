import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
// screens
import Welcome from '@/Screens/Welcome'
import { SignUp } from '@/Screens/SignUp'
import { SignIn } from '@/Screens/SignIn'
import { Language } from '@/Screens/Language'
import { OTP } from '@/Screens/Otp'
import GetStart from '@/Screens/GetStart'

const authStack = createStackNavigator()

const AuthStackScreen = () => (
  <authStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Welcome"
  >
     <authStack.Screen
            name="Main"
            component={Welcome}
            options={{
              animationEnabled: false,
            }}
          />
          <authStack.Screen
            name="GetStart"
            component={GetStart}
            options={{
              animationEnabled: false,
            }}
          />
          <authStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              animationEnabled: false,
            }}
          />
          <authStack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              animationEnabled: false,
            }}
          />
          <authStack.Screen
            name="Language"
            component={Language}
            options={{
              animationEnabled: false,
            }}
          />
          <authStack.Screen
            name="OTP"
            component={OTP}
            options={{
              animationEnabled: false,
            }}
          />



  </authStack.Navigator>
)

export default AuthStackScreen
