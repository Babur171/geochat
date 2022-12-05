import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Dimensions, View, Text } from "react-native";
// screens
import Welcome from "@/Screens/Welcome";
import { SignUp } from "@/Screens/SignUp";
import { SignIn } from "@/Screens/SignIn";
import { Language } from "@/Screens/Language";
import { OTP } from "@/Screens/Otp";
import GetStart from "@/Screens/GetStart";
import { ChattingList } from "@/Screens/ChattingList";
import { ChooseImage } from "@/Screens/ChooseImage";
import { ChatHistory } from "@/Screens/ChatHistory";
import { ChatInfo } from "@/Screens/ChatInfo";
import Security from "@/Screens/Security";
import AddContact from "@/Screens/AddContact";
import EditContact from "@/Screens/EditContact";
import LinkMobile from "@/Screens/LinkMobile";
import {SearchFriends} from "@/Screens/SearchFriends";
import {Tags} from "@/Screens/Tags";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { width } = Dimensions.get("window");

const authStack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    <authStack.Screen
      name="Security"
      component={Security}
      options={{
        animationEnabled: false,
      }}
    />
    <authStack.Screen
      name="AddContact"
      component={AddContact}
      options={{
        animationEnabled: false,
      }}
    />
    <authStack.Screen
      name="EditContact"
      component={EditContact}
      options={{
        animationEnabled: false,
      }}
    />
    <authStack.Screen
      name="LinkMobile"
      component={LinkMobile}
      options={{
        animationEnabled: false,
      }}
    />
     <authStack.Screen
      name="Tags"
      component={Tags}
      options={{
        animationEnabled: false,
      }}
    />
     <authStack.Screen
      name="SearchFriends"
      component={SearchFriends}
      options={{
        animationEnabled: false,
      }}
    />
    
    <authStack.Screen
      name="BottomNavigator"
      component={BottomNavigator}
      options={{
        animationEnabled: false,
      }}
    />
  </authStack.Navigator>
);

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ChattingList"
      screenOptions={{
        tabBarStyle: { height: width * 0.15, paddingBottom: 5 },
      }}
    >
      <Tab.Screen
        name="ChooseImage"
        component={ChooseImage}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, lineHeight: 15, fontWeight: "400" }}>
              Chats
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../Assets/messageFocus.png")
                  : require("../Assets/message.png")
              }
              style={{ height: 34, width: 31 }}
            />
          ),
          header: () => null,
        }}
      />
      <Tab.Screen
        name="ChattingList"
        component={ChattingList}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, lineHeight: 15, fontWeight: "400" }}>
              Contacts
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../Assets/adduserFocus.png")
                  : require("../Assets/adduser.png")
              }
              style={{ height: 24, width: 39 }}
            />
          ),
          header: () => null,
        }}
      />
      <Tab.Screen
        name="ChatHistory"
        component={ChatHistory}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, lineHeight: 15, fontWeight: "400" }}>
              Discover
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../Assets/globeFocus.png")
                  : require("../Assets/globe.png")
              }
              style={{ height: 25, width: 22 }}
            />
          ),
          header: () => null,
        }}
      />
      <Tab.Screen
        name="ChatInfo"
        component={ChatInfo}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, lineHeight: 15, fontWeight: "400" }}>
              Me
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../Assets/profileFocus.png")
                  : require("../Assets/profile.png")
              }
              style={{ height: 27, width: 24 }}
            />
          ),
          header: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
export default AuthStackScreen;
