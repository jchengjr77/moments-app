/**
 * * This screen is a preserved splash screen
 * Essentially just a modified splash screen with a signup or login button.
 * This is so we can show off the art a little bit, and give
 * the users a moment to orient themselves.
 *
 * The Sign Up button should lead to the Signup page, which is the page
 * where the user onboards for the first time.
 *
 * The Log In button should lead to the Login page, where the user simply
 * inputs their existing username and password to get started.
 *
 */

import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import BigPrimaryButton from "../components/BigPrimaryButton";
import BigSecondaryButton from "../components/BigSecondaryButton";
import colors from "../constants/Colors";
import splashImg from "../assets/splash.png";

const StartScreen = props => {
  let buttonWidth = Dimensions.get("window").width * 0.75;

  const loginHandler = () => {
    console.log("Login Button Pressed");
  };

  const signupHandler = () => {
    console.log("Signup Button Pressed");
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.splash} source={splashImg}>
        <View style={styles.buttonCont}>
          <BigPrimaryButton
            title="Login"
            onPress={loginHandler}
            width={buttonWidth}
          />
          <BigSecondaryButton
            title="Sign Up"
            onPress={signupHandler}
            width={buttonWidth}
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
  buttonCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: Dimensions.get("window").height / 2
  },
  splash: {
    alignSelf: "center",
    width: "100%",
    height: "75%"
  }
});

export default StartScreen;
