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
  Dimensions,
  ScrollView
} from "react-native";
import BigPrimaryButton from "../components/BigPrimaryButton";

import colors from "../constants/Colors";
import pages from "../constants/Pages";
import splashImg from "../assets/splash.png";
import BigSecondaryButton from "../components/BigSecondaryButton";

const LoginScreen = props => {
  const [email, onChangeEmail] = useState("");
  const [usrvalue, onChangeTextUsr] = useState("");
  const [pwvalue, onChangeTextPw] = useState("");
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
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
              backgroundColor: selected1 ? "#F0F2F4" : "#DDDDDD"
            }}
            onFocus={() => {
              setSelected1(true);
              setOffset(-175);
            }}
            onBlur={() => {
              setSelected1(false);
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
              backgroundColor: selected2 ? "#F0F2F4" : "#DDDDDD"
            }}
            onFocus={() => {
              setSelected2(true);
              setOffset(-175);
            }}
            onBlur={() => {
              setSelected2(false);
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
              backgroundColor: selected3 ? "#F0F2F4" : "#DDDDDD"
            }}
            onFocus={() => {
              setSelected3(true);
              setOffset(-175);
            }}
            onBlur={() => {
              setSelected3(false);
              setOffset(0);
            }}
            secureTextEntry // because it is a password
            selectTextOnFocus
          />
          <View style={styles.bottomButtons}>
            <BigPrimaryButton
              title="Submit"
              onPress={() => {
                console.log(
                  "Signup with username: " +
                    usrvalue +
                    ", password: " +
                    pwvalue +
                    ", email: " +
                    email
                );
              }}
            />
            <BigSecondaryButton
              title="Back"
              onPress={() => {
                console.log("going back");
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
