import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";

const FavScreen = props => {
  return (
    <View style={styles.screen}>
      <TopBar />
      <View style={styles.mainCard}>
        <Text>Favorites Screen</Text>
      </View>
      <BottomBar switchHandler={props.switchHandler} active="fav" />
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

export default FavScreen;
