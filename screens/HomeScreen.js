import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <TopBar switchHandler={props.switchHandler} favActive={false} />
      <View style={styles.mainCard}>
        <Text>Main Card</Text>
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
