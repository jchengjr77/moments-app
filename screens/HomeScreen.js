import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import MomentCard from "../components/MomentCard";
import CardCollapsed from "../components/CardCollapsed";

import { db, auth } from "../config";

const HomeScreen = props => {
  const [username, setUsername] = useState("");

  const user = auth.currentUser;
  const usersRef = db.ref("users");

  return (
    <View style={styles.screen}>
      <TopBar switchHandler={props.switchHandler} favActive={false} />
      <View style={styles.mainCard}>
        <MomentCard
          title="Card Title"
          bodyText="The quick brown fox jumped over the lazy dog"
          date="2/21/2020"
        />
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
