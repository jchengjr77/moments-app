import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";

const LibraryScreen = props => {
  return (
    <View style={styles.screen}>
      <TopBar switchHandler={props.switchHandler} favActive={false} />
      <View style={styles.mainCard}>
        <Text>Library Screen</Text>
      </View>
      <BottomBar switchHandler={props.switchHandler} active="lib" />
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

export default LibraryScreen;
