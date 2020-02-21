import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";

import { db, auth } from "../config";

const HomeScreen = props => {
  const [username, setUsername] = useState("");

  const user = auth.currentUser;
  const usersRef = db.ref("users");

  useEffect(() => {
    usersRef
      .orderByChild("email")
      .equalTo(user.email)
      .on("child_added", data => {
        console.log("Key: " + data.key);
        console.log("Username: " + data.val().username);
        setUsername(data.val().username);
      });
  });

  return (
    <View style={styles.screen}>
      <TopBar switchHandler={props.switchHandler} favActive={false} />
      <View style={styles.mainCard}>
        <Text>My email: {user.email}</Text>
        <Text>My username: {username}</Text>
      </View>
      <BottomBar switchHandler={props.switchHandler} active="home" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainCard: {
    flex: 6,
    justifyContent: "center"
  }
});

export default HomeScreen;
