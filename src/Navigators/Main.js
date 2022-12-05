import React from "react";
import { Image, Dimensions, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChattingList } from "@/Screens/ChattingList";
import ChooseWallpaper from "@/Screens/ChooseWallpaper";
import { ChatHistory } from "@/Screens/ChatHistory";
import { ChatInfo } from "@/Screens/ChatInfo";
import { PhotosAndVideos } from "@/Screens/PhotosAndVideos";
import { ChooseBackGround } from "@/Screens/ChooseBackGround";
import { ChooseImage } from "@/Screens/ChooseImage";
import { SearchFriends } from "@/Screens/SearchFriends";
import { Tags } from "@/Screens/Tags";
import { SelectContact } from "@/Screens/SelectContact";
import { SaveTag } from "@/Screens/SaveTag";
import { OfficialAccount } from "@/Screens/OfficialAccount";
import { GroupChat } from "@/Screens/GroupChat";
import { Discover } from "@/Screens/Discover";
import { Moments } from "@/Screens/Moments";
import { Profile } from "@/Screens/Me";
import { MyPost } from "@/Screens/MyPost";
import { MyPost1 } from "@/Screens/MyPost1";
import { Money } from "@/Screens/Money";
import { ReceiveMoney } from "@/Screens/RecieveMoney";
import { RewardCode } from "@/Screens/RewardCode";

import Security from "@/Screens/Security";
import AddContact from "@/Screens/AddContact";
import EditContact from "@/Screens/EditContact";
import LinkMobile from "@/Screens/LinkMobile";

import { createStackNavigator } from "@react-navigation/stack";

const mainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const { width } = Dimensions.get("window");
import { Images } from "@/Theme";

// @refresh reset
const BottomNavigator = (props) => {
  const {
    route: { state },
  } = props;

  return (
    <Tab.Navigator
      initialRouteName="ChattingList"
      screenOptions={{
        tabBarStyle: { height: width * 0.15, paddingBottom: 5 },
      }}
    >
      <Tab.Screen
        name="ChooseWallpaper"
        component={ChooseWallpaper}
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

const MainNavigator = () => (
  <mainStack.Navigator
    screenOptions={{ headerShown: false, animationEnabled: false }}
    initialRouteName="BottomBar"
  >
    <mainStack.Screen name="BottomBar" component={BottomNavigator} />
    <mainStack.Screen name="ChooseWallpaper" component={ChooseWallpaper} />
    <mainStack.Screen name="ChooseBackGround" component={ChooseBackGround} />
    <mainStack.Screen name="PhotosAndVideos" component={PhotosAndVideos} />
    
    <mainStack.Screen
      name="ChooseImage"
      component={ChooseImage}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="SearchFriends"
      component={SearchFriends}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="Tags"
      component={Tags}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="SelectContact"
      component={SelectContact}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="SaveTag"
      component={SaveTag}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="OfficialAccount"
      component={OfficialAccount}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="GroupChat"
      component={GroupChat}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="Discover"
      component={Discover}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="Moments"
      component={Moments}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="Profile"
      component={Profile}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="MyPost"
      component={MyPost}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="MyPost1"
      component={MyPost1}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="Money"
      component={Money}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="ReceiveMoney"
      component={ReceiveMoney}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="RewardCode"
      component={RewardCode}
      options={{
        animationEnabled: false,
      }}
    />

    <mainStack.Screen
      name="Security"
      component={Security}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="AddContact"
      component={AddContact}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="EditContact"
      component={EditContact}
      options={{
        animationEnabled: false,
      }}
    />
    <mainStack.Screen
      name="LinkMobile"
      component={LinkMobile}
      options={{
        animationEnabled: false,
      }}
    />
  </mainStack.Navigator>
);

export default MainNavigator;
