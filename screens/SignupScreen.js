/**
 * Login screen should contain an username and password fields only.
 * Sends a request to the database searching for the username and password.
 */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Dimensions
} from "react-native";
import BigPrimaryButton from "../components/BigPrimaryButton";
import AwesomeButton from "react-native-really-awesome-button";
import colors from "../constants/Colors";
import pages from "../constants/Pages";
import splashImg from "../assets/splash.png";

const LoginScreen = props => {
  const [usrvalue, onChangeTextUsr] = useState("");
  const [pwvalue, onChangeTextPw] = useState("");
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.splash} source={splashImg}>
        <View style={styles.buttonCont}>
          <TextInput
            value={usrvalue}
            placeholder="Username"
            onChangeText={text => onChangeTextUsr(text)}
            style={styles.inputField}
            onFocus={() => {
              setSelected(true);
            }}
            selectTextOnFocus
          />
          <TextInput
            defaultValue={pwvalue}
            placeholder="Password"
            onChangeText={text => onChangeTextPw(text)}
            style={styles.inputField}
            secureTextEntry // because it is a password
            selectTextOnFocus
            onFocus={() => {
              style.backgroundColor = colors.lightOrange;
            }}
          />
          <BigPrimaryButton title="Submit" />
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
  },
  inputField: {
    borderColor: colors.primary,
    backgroundColor: selected ? colors.lightOrange : "lightgray",
    borderBottomWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    width: Dimensions.get("window").width * 0.8,
    height: "10%"
  }
});

export default LoginScreen;
