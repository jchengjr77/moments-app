/**
 * Signup screen should contain an email, username and password field.
 * Posts the new user data to the database.
 */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Dimensions,
  Alert
} from "react-native";
import BigPrimaryButton from "../components/BigPrimaryButton";
import BigSecondaryButton from "../components/BigSecondaryButton";

import colors from "../constants/Colors";
import pages from "../constants/Pages";
import splashImg from "../assets/name.png";

import { db, auth } from "../config";

// Function to add user to the database
const addUser = (usr, pw, email) => {
  // Create a new user
  auth
    .createUserWithEmailAndPassword(email, pw)
    .catch(error => {
      console.log("Unable to register user: " + email);
      console.log(error);
      Alert.alert("Unable to register user: " + email);
      return;
    })
    .then(() => {
      auth.signInWithEmailAndPassword(email, pw).catch(error => {
        console.log("Unable to signin user: " + email);
        console.log(error);
        Alert.alert("Unable to signin user: " + email);
        return;
      });
      let usersInfo = db.ref("users");
      usersInfo.push({
        username: usr,
        email: email
      });
    });

  Alert.alert("Welcome, " + usr);
};

const LoginScreen = props => {
  const [email, onChangeEmail] = useState("");
  const [usrvalue, onChangeTextUsr] = useState("");
  const [pwvalue, onChangeTextPw] = useState("");
  const [emailSel, setEmailSel] = useState(false);
  const [usrSel, setUsrSel] = useState(false);
  const [pwSel, setPwSel] = useState(false);
  const [offset, setOffset] = useState(0);

  return (
    <View style={styles.screenContainer} top={offset} bottom={offset}>
      <ImageBackground style={styles.splash} source={splashImg}>
        <View style={styles.buttonCont}>
          <TextInput
            defaultValue={email}
            placeholder="Email"
            placeholderTextColor="#AAAAAA"
            onChangeText={text => onChangeEmail(text)}
            style={{
              ...styles.inputField,
              backgroundColor: emailSel ? "#F0F2F4" : "#DDDDDD"
            }}
            onFocus={() => {
              setEmailSel(true);
              setOffset(-175);
            }}
            onBlur={() => {
              setEmailSel(false);
              setOffset(0);
            }}
          />
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
              setOffset(-175);
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
              setOffset(-175);
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
                addUser(usrvalue, pwvalue, email);
                props.switchHandler(pages.homePage);
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
