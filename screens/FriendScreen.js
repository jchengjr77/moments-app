/**
 * * This screen displays all of your friends
 * * Currently this just implements dynamically designed friends
 * *
 * * Short Term: This should be pulling friends from a JSON file
 * * Long Term: This should be pulling friends from a database
 *
 */

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import FriendBox from "../components/FriendBox";
import colors from "../constants/Colors";
import noProf from "../assets/no-profile.png";
import testImg from "../assets/testImg.png";
import iconImg from "../assets/iconNoBG.png";

const FriendScreen = props => {
  return (
    <View style={styles.container}>
      <View flexDirection="column">
        <FriendBox
          profPic={noProf}
          name="Bot 1"
          numFriends="5 mutual friends"
        />
        <FriendBox
          profPic={testImg}
          name="Bot 2"
          numFriends="0 mutual friends"
        />
        <FriendBox
          profPic={iconImg}
          name="Bot 3"
          numFriends="7 mutual friends"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Dimensions.get("window").width * 0.2,
    paddingLeft: Dimensions.get("window").width * 0.1,
    paddingRight: Dimensions.get("window").width * 0.1,
    backgroundColor: colors.splashBackground
  },
  buttonCont: {
    flex: 1
  },
  splash: {
    alignSelf: "center",
    width: "100%",
    height: "75%"
  }
});

export default FriendScreen;
