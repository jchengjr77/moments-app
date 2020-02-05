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
import BottomBar from "../components/BottomBar";
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
      <BottomBar switchHandler={props.switchHandler} active="friends" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  friendList: {
    flex: 6,
    paddingLeft: "10%",
    paddingRight: "10%"
  }
});

export default FriendScreen;
