import React from "react"
import { Image, Dimensions, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

import {
    ChattingList,
} from "@/Screens/ChattingList"
import { createStackNavigator } from "@react-navigation/stack"

const mainStack = createStackNavigator()

const {width} = Dimensions.get('window')
import { Images } from "@/Theme"


// @refresh reset
const BottomNavigator = props => {
  const {
    route: { state }
  } = props

  return (
    <Tab.Navigator
      initialRouteName="ChattingList"
      screenOptions={{
        tabBarStyle: { height: width*0.16, paddingBottom: 25 }
      }}
    >
      <Tab.Screen
        name="ChattingList"
        component={ChattingList}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Image
            source={require(
              "../Assets/profile.png")}
              style={{ height: 25.97, width: 20, }}
            />
          ),
          header: () => null
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigator = () => (
  <mainStack.Navigator
    screenOptions={{ headerShown: false, animationEnabled: false }}
    initialRouteName="BottomBar"
  >
    <mainStack.Screen name="BottomBar" component={BottomNavigator} />
  </mainStack.Navigator>
)

export default MainNavigator
