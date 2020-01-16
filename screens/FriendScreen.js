/**
 * * This screen displays all of your friends
 * * Currently this just implements dynamically designed friends
 * *
 * * Short Term: This should be pulling friends from a JSON file
 * * Long Term: This should be pulling friends from a database
 **/

import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import FriendBox from "../components/FriendBox";
import colors from "../constants/Colors";
import fakeData from "../Data/FriendData.json";

const FriendScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View flexDirection="column">
          {fakeData.friends.map(function(d, idx) {
            return (
              <FriendBox
                key={idx}
                profPic={d.profPic}
                name={d.name}
                numFriends={d.mutualFriends}
              />
            );
          })}
        </View>
      </ScrollView>
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
