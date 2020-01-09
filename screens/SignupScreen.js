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

const SignupScreen = props => {
  let buttonWidth = Dimensions.get("window").width * 0.75;

  const emailHandler = () => {
    console.log("Email Button Pressed");
  };

  const facebookHandler = () => {
    console.log("Facebook Button Pressed");
  };

  const googleHandler = () => {
    console.log("Google Button Pressed");
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.splash} source={splashImg}>
        <View style={styles.buttonCont}>
          <BigPrimaryButton
            title="Email"
            onPress={emailHandler}
            width={buttonWidth}
          />
          <BigSecondaryButton
            title="Facebook"
            onPress={facebookHandler}
            width={buttonWidth}
          />
          <BigSecondaryButton
            title="Google"
            onPress={googleHandler}
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

export default SignupScreen;
