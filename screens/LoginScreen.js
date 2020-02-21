/*
  Login fields with username and password. Validated through the firebase db
*/

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Dimensions,
  Alert,
  Vibration
} from "react-native";
import BigPrimaryButton from "../components/BigPrimaryButton";
import BigSecondaryButton from "../components/BigSecondaryButton";

import colors from "../constants/Colors";
import pages from "../constants/Pages";
import splashImg from "../assets/name.png";

import { db } from "../config";

const LoginScreen = props => {
  const [usrvalue, onChangeTextUsr] = useState("");
  const [pwvalue, onChangeTextPw] = useState("");
  const [usrSel, setUsrSel] = useState(false);
  const [pwSel, setPwSel] = useState(false);
  const [offset, setOffset] = useState(0);

  // Check login credentials
  const userAuth = (usr, pw) => {
    // Grab users reference from firebase
    let userRef = db.ref("/users");
    let auth = false;

    // Extract all users from userRef and check credentials
    userRef.on("value", users => {
      users.forEach(user => {
        const creds = user.val();
        if (creds.username === usr && creds.password === pw) {
          props.switchHandler(pages.homePage);
          auth = true;
        }
      });
      if (auth == false) {
        Alert.alert("Username and/or Password do not match");
        Vibration.vibrate(200);
      }
    });
  };

  return (
    <View style={styles.screenContainer} top={offset} bottom={offset}>
      <ImageBackground style={styles.splash} source={splashImg}>
        <View style={styles.buttonCont}>
          <TextInput
            value={usrvalue}
            placeholder="Username"
            placeholderTextColor="#AAAAAA"
            onChangeText={text => onChangeTextUsr(text)}
            style={{
              ...styles.inputField,
              backgroundColor: usrSel ? "#F0F2F4" : "#DDDDDD"
            }}
            onFocus={() => {
              setUsrSel(true);
              setOffset(-100);
            }}
            onBlur={() => {
              setUsrSel(false);
              setOffset(0);
            }}
          />
          <TextInput
            defaultValue={pwvalue}
            placeholder="Password"
            placeholderTextColor="#AAAAAA"
            onChangeText={text => onChangeTextPw(text)}
            style={{
              ...styles.inputField,
              backgroundColor: pwSel ? "#F0F2F4" : "#DDDDDD"
            }}
            onFocus={() => {
              setPwSel(true);
              setOffset(-100);
            }}
            onBlur={() => {
              setPwSel(false);
              setOffset(0);
            }}
            secureTextEntry // because it is a password
            selectTextOnFocus
          />
          <View style={styles.bottomButtons}>
            <BigPrimaryButton
              title="Submit"
              onPress={() => {
                userAuth(usrvalue, pwvalue);
              }}
            />
            <BigSecondaryButton
              title="Back"
              onPress={() => {
                props.switchHandler(pages.startPage);
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
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
    borderBottomWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    width: Dimensions.get("window").width * 0.8,
    height: "10%"
  },
  bottomButtons: {
    width: Dimensions.get("window").width * 0.8,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default LoginScreen;
