/**
 * Login screen should contain an username and password fields only.
 * Sends a request to the database searching for the username and password.
 */

import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import BigPrimaryButton from "../components/BigPrimaryButton";
import AwesomeButton from "react-native-really-awesome-button";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";
import colors from "../constants/Colors";
import pages from "../constants/Pages";
import splashImg from "../assets/splash.png";

const LoginScreen = props => {
  const [value, onChangeText] = useState("");

  const formatText = text => {
    return text.replace(/[^+\d]/g, "");
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.splash} source={splashImg}>
        <View style={styles.buttonCont}>
          <TextField
            label="Username"
            keyboardType="default"
            formatText={formatText}
            onSubmitEditing
          />
          <OutlinedTextField
            label="Phone number"
            keyboardType="phone-pad"
            formatText={formatText}
            onChangeText={() => onChangeText(value)}
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
    paddingTop: Dimensions.get("window").height / 2.5
  },
  splash: {
    alignSelf: "center",
    width: "100%",
    height: "75%"
  }
});

export default LoginScreen;
