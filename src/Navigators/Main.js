import React from "react"
import { Image, Dimensions, View, Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
  ChattingList,
} from "@/Screens/ChattingList"
import ChooseWallpaper from '@/Screens/ChooseWallpaper'
import { ChatHistory } from '@/Screens/ChatHistory'
import { ChatInfo } from '@/Screens/ChatInfo'
import {ChooseBackGround} from '@/Screens/ChooseBackGround'
import {ChooseImage} from '@/Screens/ChooseImage'
import {PhotosAndVideos} from '@/Screens/PhotosAndVideos'


import { createStackNavigator } from "@react-navigation/stack"

const mainStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const { width } = Dimensions.get('window')
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
        tabBarStyle: { height: width * 0.15, paddingBottom: 5 }
      }}
    >
      <Tab.Screen
        name="ChooseWallpaper"
        component={ChooseWallpaper}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, lineHeight: 15, fontWeight: '400' }}>Chats</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? require(
                  "../Assets/messageFocus.png")
                  : require(
                    "../Assets/message.png")
              }
              style={{ height: 34, width: 31, }}
            />
          ),
          header: () => null
        }}
      />
      <Tab.Screen
        name="ChattingList"
        component={ChattingList}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, lineHeight: 15, fontWeight: '400' }}>Contacts</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? require(
                  "../Assets/adduserFocus.png")
                  : require(
                    "../Assets/adduser.png")
              }
              style={{ height: 24, width: 39, }}
            />
          ),
          header: () => null
        }}
      />
      <Tab.Screen
        name="ChatHistory"
        component={ChatHistory}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, lineHeight: 15, fontWeight: '400' }}>Discover</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
            source={
              focused ? require(
                "../Assets/globeFocus.png")
                : require(
                  "../Assets/globe.png")
            }
              style={{ height: 25, width: 22, }}
            />
          ),
          header: () => null
        }}
      />
      <Tab.Screen
        name="ChatInfo"
        component={ChatInfo}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, lineHeight: 15, fontWeight: '400' }}>Me</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
            source={
              focused ? require(
                "../Assets/profileFocus.png")
                : require(
                  "../Assets/profile.png")
            }
              style={{ height: 27, width: 24, }}
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
    <mainStack.Screen name="ChooseWallpaper" component={ChooseWallpaper} />
    <mainStack.Screen name="ChooseBackGround" component={ChooseBackGround} />
    <mainStack.Screen name="ChooseImage" component={ChooseImage} />
    <mainStack.Screen name="PhotosAndVideos" component={PhotosAndVideos} />
  </mainStack.Navigator>
)

export default MainNavigator
