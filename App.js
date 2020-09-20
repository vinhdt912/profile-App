import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import Constants from "expo-constants";

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";

const imgData = [
  { id: 1, imgSource: require("./images/nt1.jpg") },
  { id: 2, imgSource: require("./images/nt2.jpg") },
  { id: 3, imgSource: require("./images/nt3.jpg") },
  { id: 4, imgSource: require("./images/nt4.jpg") },
  { id: 5, imgSource: require("./images/nt5.jpg") },
  { id: 6, imgSource: require("./images/nt6.jpg") },
  { id: 7, imgSource: require("./images/nt5.jpg") },
  { id: 8, imgSource: require("./images/nt6.jpg") },
];

const socialInfo = [
  { name: "Photos", quantity: 210 },
  { name: "Followers", quantity: "15k" },
  { name: "Following", quantity: 605 },
];

const deviceWidth = Dimensions.get("window").width;

const centerImgData = Math.floor(imgData.length / 2);

export default function App() {
  return (
    //Header
    <ScrollView style={styles.container}>
      <View style={styles.navigate}>
        <View>
          <AntDesign
            name="arrowleft"
            style={styles.icons}
            onPress={() => alert("back")}
          />
        </View>
        <View>
          <AntDesign
            name="bars"
            style={styles.icons}
            onPress={() => alert("menu")}
          />
        </View>
      </View>

      <View style={styles.avatarWrapper}>
        <Image source={require("./images/av3.jpg")} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Wick</Text>
          <Text style={styles.userJob}>Designer</Text>
          <View style={styles.followAndSend}>
            <Text style={styles.follow} onPress={() => alert("follow")}>
              Follow
            </Text>
            <Feather
              name="send"
              style={styles.sendMessage}
              onPress={() => alert("send a message")}
            />
          </View>
        </View>
      </View>

      <View style={styles.infoCounter}>
        {socialInfo.map((info) => {
          return (
            <View style={styles.box}>
              <Text style={styles.number}>{info.quantity}</Text>
              <Text style={styles.content}>{info.name}</Text>
            </View>
          );
        })}
      </View>

      <View style={styles.photos}>
        <View style={styles.column}>
          {imgData.slice(0, centerImgData).map((item) => {
            return <Image source={item.imgSource} style={styles.image} />;
          })}
        </View>
        <View style={styles.column}>
          {imgData.slice(centerImgData).map((item) => {
            return <Image source={item.imgSource} style={styles.image} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  navigate: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  icons: {
    fontSize: 30,
    color: "black",
  },
  avatarWrapper: {
    flexDirection: "row",
    margin: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginHorizontal: 10,
  },
  userInfo: {
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(39,51,80)",
  },
  userJob: {
    fontSize: 20,
    color: "rgb(168,172,195)",
  },
  followAndSend: {
    flexDirection: "row",
  },
  follow: {
    color: "white",
    fontSize: 20,
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: FOLLOW_COLOR,
  },
  sendMessage: {
    color: "white",
    fontSize: 26,
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: SEND_MESSAGE_COLOR,
  },
  infoCounter: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  number: {
    fontSize: 25,
    fontWeight: "200",
    textAlign: "center",
  },
  content: {
    color: "grey",
    textAlign: "center",
  },
  photos: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: deviceWidth / 2 - 20,
    height: deviceWidth / 2 - 20,
    marginBottom: 20,
    resizeMode: "stretch",
    borderRadius: 20,
    padding: 0,
  },
});
