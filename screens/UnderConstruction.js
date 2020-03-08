import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import colors from "../constants/Colors";
import crane from "../assets/iconNoBG.png";

const UnderConstruction = props => {
  return (
    <View style={styles.screen}>
      <TopBar switchHandler={props.switchHandler} favActive={false} />
      <View style={styles.mainCard}>
        <View style={styles.headerArea}>
          <Image source={crane} style={styles.crane}></Image>
          <Text style={styles.headerText}>Whoops!</Text>
        </View>
        <Text style={styles.smallText}>
          This feature is still under construction. Stay tuned for updates on
          all Moments features.
        </Text>
      </View>
      <BottomBar switchHandler={props.switchHandler} active={props.active} />
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
  },
  headerArea: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    fontSize: 60,
    fontWeight: "200",
    marginBottom: "10%",
    marginTop: "10%",
    color: colors.primary
  },
  smallText: {
    fontSize: 25,
    fontWeight: "300",
    margin: "5%",
    color: colors.primary
  },
  crane: {
    width: 75,
    height: 75,
    marginLeft: "1%"
  }
});

export default UnderConstruction;
