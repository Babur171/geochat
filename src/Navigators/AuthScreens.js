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
import Contacts from "@/Screens/Contacts";
import { Discover } from "@/Screens/Discover";
import { Profile } from "@/Screens/Me";
import { MyPost } from "@/Screens/MyPost";
import { MyPost1 } from "@/Screens/MyPost1";
import { Moments } from "@/Screens/Moments";
import ChatScreen from "@/Screens/ChatScreen";
import { PhotosAndVideos } from "@/Screens/PhotosAndVideos";
import ChooseWallpaper from "@/Screens/ChooseWallpaper";
import { ChooseBackGround } from "@/Screens/ChooseBackGround";
import { GroupChat } from "@/Screens/GroupChat";
import { SelectContact } from "@/Screens/SelectContact"
import { PhoneVerification } from "@/Screens/PhoneVarification";
import {SearchChatHistory} from "@/Screens/SearchChatHistory";
import { OfficialAccount } from "@/Screens/OfficialAccount";


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
      name="MyPost"
      component={MyPost}
      options={{
        animationEnabled: false,
      }}
    />
     <authStack.Screen
      name="ChatScreen"
      component={ChatScreen}
      options={{
        animationEnabled: false,
      }}
    />
      <authStack.Screen
      name="ChatInfo"
      component={ChatInfo}
      options={{
        animationEnabled: false,
      }}
    />
    <authStack.Screen
      name="ChatHistory"
      component={ChatHistory}
      options={{
        animationEnabled: false,
      }}
    />
     <authStack.Screen
      name="PhotosAndVideos"
      component={PhotosAndVideos}
      options={{
        animationEnabled: false,
      }}
    />
       <authStack.Screen
      name="ChooseWallpaper"
      component={ChooseWallpaper}
      options={{
        animationEnabled: false,
      }}
    />
     <authStack.Screen
      name="GroupChat"
      component={GroupChat}
      options={{
        animationEnabled: false,
      }}
    />
    <authStack.Screen
      name="SelectContact"
      component={SelectContact}
      options={{
        animationEnabled: false,
      }}
    />
    <authStack.Screen
      name="PhoneVerification"
      component={PhoneVerification}
      options={{
        animationEnabled: false,
      }}
    />
     <authStack.Screen
      name="SearchChatHistory"
      component={SearchChatHistory}
      options={{
        animationEnabled: false,
      }}
    />
     <authStack.Screen
      name="OfficialAccount"
      component={OfficialAccount}
      options={{
        animationEnabled: false,
      }}
    />
    
    

<authStack.Screen
      name="ChooseBackGround"
      component={ChooseBackGround}
      options={{
        animationEnabled: false,
      }}
    />
        <authStack.Screen
      name="ChooseImage"
      component={ChooseImage}
      options={{
        animationEnabled: false,
      }}
    />
    

<authStack.Screen
      name="MyPost1"
      component={MyPost1}
      options={{
        animationEnabled: false,
      }}
    />
<authStack.Screen
      name="Moments"
      component={Moments}
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
        name="ChattingList"
        component={ChattingList}
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
        name="Contacts"
        component={Contacts}
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
        name="Discover"
        component={Discover}
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
        name="Profile"
        component={Profile}
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
