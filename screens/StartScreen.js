import React, { useState } from "react";
import { View, Dimensions, StyleSheet, ImageBackground } from "react-native";
import Continue from "../components/Continue";
import colors from "../constants/Colors";
import splashImg from "../assets/splash.png";

const StartScreen = props => {
  const continueHandler = () => {
    console.log("Continue Button Pressed");
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.splash} source={splashImg}>
        <View style={styles.continueCont}>
          <Continue
            continue={() => {
              continueHandler();
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.splashBackground
  },
  continueCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingVertical: "10%"
  },
  splash: {
    alignSelf: "center",
    width: "100%",
    height: "75%"
  }
});

export default StartScreen;
