/**
 * * This screen displays all of your friends
 * Currently this just implements dynamically designed friends
 *
 * Short Term: This should be pulling friends from a JSON file
 * Long Term: This should be pulling friends from a database
 **/

import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import TopBar from "../components/TopBar";
import FriendBox from "../components/FriendBox";
import colors from "../constants/Colors";
import fakeData from "../data/FriendData.json";

const FriendScreen = props => {
  return (
    <View style={styles.screen}>
      <TopBar />
      <View style={styles.friendList}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.splashBackground
  },
  friendList: {
    flex: 9,
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingBottom: "5%",
    backgroundColor: colors.splashBackground
  }
});

export default FriendScreen;
