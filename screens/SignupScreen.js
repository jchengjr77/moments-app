/**
 * ! @Vignesh comment the file haha
 */

import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import BigPrimaryButton from "../components/BigPrimaryButton";
import AwesomeButton from "react-native-really-awesome-button";
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
          <AwesomeButton
            backgroundColor="#3b5998"
            backgroundDarker="#193776"
            backgroundShadow="#8b9dc3"
            raiseLevel={4}
            textFontFamily="montserrat-bold"
            textColor="#ffffff"
            textSize={20}
            onPress={facebookHandler}
            width={buttonWidth}
          >
            Facebook
          </AwesomeButton>
          <AwesomeButton
            backgroundColor="#ffffff"
            backgroundDarker="#64a7F6"
            backgroundShadow="#eeeeee"
            raiseLevel={4}
            textFontFamily="montserrat-bold"
            textColor="#333333"
            textSize={20}
            onPress={googleHandler}
            width={buttonWidth}
          >
            Google
          </AwesomeButton>
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
