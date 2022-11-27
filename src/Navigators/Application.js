import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer } from '@/Containers'
import Welcome from '@/Screens/Welcome'
import { SignUp } from '@/Screens/SignUp'
import { SignIn } from '@/Screens/SignIn'
import { Language } from '@/Screens/Language'
import { OTP } from '@/Screens/Otp'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { ChattingList } from '@/Screens/ChattingList'
import GetStart from '@/Screens/GetStart'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Main"
            component={Welcome}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="GetStart"
            component={GetStart}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Language"
            component={Language}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="OTP"
            component={OTP}
            options={{
              animationEnabled: false,
            }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const BottomBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ChattingList"
        component={ChattingList}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Tab.Navigator>
  )
}

export default ApplicationNavigator
