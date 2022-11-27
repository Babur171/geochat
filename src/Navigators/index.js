import React from "react"
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { connect } from "react-redux"
import { navigationRef } from './utils'

import AuthStackScreen from "./AuthScreens"
import MainNavigator from "./Main"

import { useTheme } from '@/Hooks'

const authStack = createStackNavigator()
const mainStack = createStackNavigator()

const RootNavigationStack = props => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />

        <authStack.Navigator screenOptions={{headerShown: false}}>
        {false ? (
          <authStack.Screen name="MainStack" component={MainNavigator} />
        ) : (
          <mainStack.Screen name="AuthStack" component={AuthStackScreen} />
        )}
      </authStack.Navigator>

    </NavigationContainer>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  // accessToken: state.login.accessToken
})

export default connect(mapStateToProps, null)(RootNavigationStack)
