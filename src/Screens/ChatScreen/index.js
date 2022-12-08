import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DirectMessagesScreen = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [user1, setUser1] = useState({});
  const [user2, setUser2] = useState({});
  const [visible, setVisible]=useState(false)
  const [conversation, setConversation] = useState([]);
  useEffect(() => {
    setUser1({
      name: "User1",
      image: require("../../Assets/profile1.png"),
      isOnline: true,
    });
    setUser2({
      name: "Username",
      image: require("../../Assets/profile2.png"),
      isOnline: true,
    });
  }, []);
  useEffect(() => {
    setConversation([
      {
        id: 1,
        sender: user1,
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        sentTime: "12:00 PM",
      },
      {
        id: 2,
        sender: user2,
        text: "lorem ipsum dolor sit amet",
        sentTime: "01:15 PM",
      },
      {
        id: 3,
        sender: user2,
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        sentTime: "01:15 PM",
      },
      {
        id: 4,
        sender: user1,
        text: "lorem ipsum dolor sit amet",
        sentTime: "01:15 PM",
      },
      {
        id: 5,
        sender: user2,
        text: "lorem ipsum dolor sit amet",
        sentTime: "01:15 PM",
      },
      {
        id: 77,
        sender: user2,
        text: "lorem ipsum dolor sit amet",
        sentTime: "01:15 PM",
      },
      {
        id: 6,
        sender: user1,
        text: "lorem ipsum dolor sit amet",
        sentTime: "01:15 PM",
      },
    ]);
  }, [user1, user2]);
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../../Assets/chatBg.png")} resizeMode="cover" style={styles.blurImageStyle}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            // @ts-ignore
            source={require("../../Assets/back.png")}
            style={styles.img}
          />
        </TouchableOpacity>
        <Text style={styles.headerStyle}>GEOFFROY</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ChatInfo")}>
        <Image
          // @ts-ignore
          source={require("../../Assets/dots.png")}
          style={styles.img}
        />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.body}>
        {conversation.map((message, index) => (
          <ConversationElement message={message} key={index} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Image
            source={require("../../Assets/voice.png")}
            style={styles.cameraIcon}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            onChangeText={(text) => setMessage(text)}
            value={message}
            autoCorrect={false}
            autoCapitalize="none"
            autoFocus={false}
          />
        </View>
        <View style={styles.endSendStyle}>
          <View style={{ marginRight: 10 }}>
            <Image
              source={require("../../Assets/iconAdd.png")}
              style={styles.addIcon}
            />
          </View>
          <TouchableOpacity style={{ marginTop: 10 }} onPress={()=>setVisible(!visible)}>
            <Image
              source={require("../../Assets/plusIcon.png")}
              style={styles.addIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
     {
      visible ? (
        <>
        <View style={styles.footerBox}>
        <View style={styles.boxStyle} >
        <Image
              source={require("../../Assets/mainImg.png")}
              style={{height:24, width:24, marginLeft:15}}
            />
        </View>
        <View style={styles.boxStyle} >
        <Image
              source={require("../../Assets/transferim.png")}
              style={{height:24, width:24, marginLeft:15}}
            />
        </View>
        <View style={styles.boxStyle} >
        <Image
              source={require("../../Assets/record.png")}
              style={{height:24, width:24, marginLeft:15}}
            />
        </View>
        <View style={styles.boxStyle} >
        <Image
              source={require("../../Assets/music.png")}
              style={{height:24, width:24, marginLeft:15}}
            />
        </View>
      </View>
      <View style={[styles.footerBox,{ paddingTop:10 }]}>
      <View style={styles.boxStyle} >
        <Image
              source={require("../../Assets/camereD.png")}
              style={{height:24, width:24, marginLeft:15}}
            />
        </View>
        <View style={styles.boxStyle} >
        <Image
              source={require("../../Assets/chatside.png")}
              style={{height:24, width:24, marginLeft:15}}
            />
        </View>
        <View style={styles.boxStyle} >
        <Image
              source={require("../../Assets/maploc.png")}
              style={{height:24, width:24, marginLeft:15}}
            />
        </View>
        <View style={styles.boxStyle} >
        <Image
              source={require("../../Assets/copy.png")}
              style={{height:24, width:24, marginLeft:15}}
            />
        </View>
      </View>
      </>
      ):null
     }
     </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  blurImageStyle: {
    width: windowWidth,
    flex:1,
},
  addIcon: {
    height: 28,
    width: 28,
  },
  footerBox:{
    backgroundColor: "black",
     flexDirection:'row',
      alignItems:'center', 
      justifyContent:'space-around',
       paddingHorizontal:10
  },

  boxStyle: {
    height: 63,
    width: 63,
    borderRadius: 10,
    backgroundColor: "#131313",
    borderRadius: 10,
    justifyContent:'center',
  },
  cameraIcon: {
    height: 27,
    width: 28,
  },
  endSendStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    // padding: 10,
    // marginHorizontal: 20,
    backgroundColor: "#BBD3FB",
    borderRadius: 10,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  headerImage: {
    flex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 44,
    color: "#000",
  },
  img: {
    resizeMode: "contain",
    width: 14,
    height: 14,
    // marginLeft: 15,
  },
  profileName: {
    flex: 2,
  },
  profileNameText: {
    fontSize: 16,
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  activityIconHeader: {
    width: 10,
    height: 10,
    resizeMode: "contain",
    position: "absolute",
    right: 20,
    top: 25,
  },
  body: {
    flex: 1,
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 15,
    // margin: 10,
  },
  inputContainer: {
    width: "70%",
  },
  input: {
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    opacity: 0.3,
  },
  smileyIcon: {
    position: "absolute",
    right: 40,
    top: 10,
    opacity: 0.5,
  },
  voiceIcon: {
    top: 14,
    right: 15,
    position: "absolute",
    opacity: 0.5,
  },
});
export default DirectMessagesScreen;

const ConversationElement = ({ message }) => {
  const boxAlignment = {
    flexDirection: message.sender.name === "User1" ? "row" : "row-reverse",
  };
  const messageTextContainer = {
    marginLeft: message.sender.name === "User1" ? 10 : 0,
    marginRight: message.sender.name === "User1" ? 0 : 10,
    backgroundColor: message.sender.name === "User1" ? "#0A0909" : "#3B8818",
  };
  return (
    <View style={[ConversationElementStyles.messageContainer, boxAlignment]}>
      <View style={ConversationElementStyles.profileImageContainer}>
        <Image
          source={require("../../Assets/Rectangle4.png")}
          style={ConversationElementStyles.profileImage}
        />
      </View>

      <View
        style={[
          message.sender.name === "User1"
            ? ConversationElementStyles.messageTextContainer
            : ConversationElementStyles.messageStyle,
          messageTextContainer,
        ]}
      >
        <Text style={ConversationElementStyles.messageText}>
          {message.text}
        </Text>
        <Text style={ConversationElementStyles.messageTime}>
          {message.sentTime}
        </Text>
      </View>
    </View>
  );
};

const ConversationElementStyles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    margin: 10,
    marginVertical: 20,
    flex: 1,
  },
  profileImageContainer: {
    borderRadius: 10,
  },
  profileImage: {
    height: 53,
    width: 52,
    borderRadius: 10,
  },
  messageTextContainer: {
    // alignItems: "flex-start",
    maxWidth: "70%",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  messageStyle: {
    maxWidth: "70%",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  messageText: {
    lineHeight: 17,
    fontSize: 14,
    color: "#fff",
    fontWeight: "400",
  },
  activityIcon: {
    position: "absolute",
    right: 0,
    top: 40,
  },
  messageTime: {
    marginTop: 5,
    color: "#fff",
    opacity: 0.5,
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 12,
  },
});
