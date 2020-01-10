/**
 * * This screen displays all of your friends
 * * Essentially just a modified splash screen with a signup or login button.
 * * This is so we can show off the art a little bit, and give
 * * the users a moment to orient themselves.
 *
 * * The Sign Up button should lead to the Signup page, which is the page
 * * where the user onboards for the first time.
 *
 * * The Log In button should lead to the Login page, where the user simply
 * * inputs their existing username and password to get started.
 *
 */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import FriendBox from "../components/FriendBox";
import colors from "../constants/Colors";
import noProf from "../assets/no-profile.png";
import nameImg from "../assets/name.png";
import testImg from "../assets/testImg.png";
import iconImg from "../assets/iconNoBG.png";

const FriendScreen = props => {
  let friendWidth = Dimensions.get("window").width * 0.85;

  const friendHandler = () => {
    console.log("Clicked on friend: ");
    //setCurrPage("");
  };

  return (
    <View style={styles.container}>
      <View flexDirection="column">
        <TouchableWithoutFeedback onPress={friendHandler}>
          <View flexDirection="row">
            <View
              width={Dimensions.get("window").width * 0.15}
              height={Dimensions.get("window").width * 0.15}
            >
              <Image
                resizeMode="contain"
                style={{
                  flex: 1,
                  width: undefined,
                  height: undefined,
                  borderWidth: 1
                }}
                source={noProf}
              />
            </View>
            <View
              style={{
                paddingTop: Dimensions.get("window").width * 0.02,
                paddingLeft: Dimensions.get("window").width * 0.03
              }}
            >
              <Text style={{ borderWidth: 0, paddingBottom: 10 }}>
                Bot Account Number 1
              </Text>
              <Text style={{ borderWidth: 0, paddingTop: -5 }}>
                5 Mutual Friends
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",

    paddingTop: Dimensions.get("window").width * 0.2,
    paddingLeft: Dimensions.get("window").width * 0.1,
    paddingRight: Dimensions.get("window").width * 0.1,
    // paddingRight: Dimensions.get("window").width * 0.075,
    // paddingRight: Dimensions.get("window").width * 0.075
    backgroundColor: colors.splashBackground
  },
  buttonCont: {
    flex: 1
    // flexDirection: "column",
    // justifyContent: "space-around"
    // alignItems: "center",
    // paddingTop: Dimensions.get("window").height / 2
  },
  splash: {
    alignSelf: "center",
    width: "100%",
    height: "75%"
  }
});

export default FriendScreen;
