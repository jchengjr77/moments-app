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
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import BigPrimaryButton from "../components/BigPrimaryButton";

import colors from "../constants/Colors";
import pages from "../constants/Pages";
import splashImg from "../assets/splash.png";

const LoginScreen = props => {
  const [email, onChangeEmail] = useState("");
  const [usrvalue, onChangeTextUsr] = useState("");
  const [pwvalue, onChangeTextPw] = useState("");
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <ScrollView
      contentContainerStyle={styles.screenContainer}
      scrollEnabled={selected1 || selected2 || selected3}
      contentOffset={offset}
    >
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
              setOffset({ x: 0, y: 150 });
            }}
            onBlur={() => {
              setSelected1(false);
              setOffset({ x: 0, y: 0 });
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
              setOffset({ x: 0, y: 150 });
            }}
            onBlur={() => {
              setSelected2(false);
              setOffset({ x: 0, y: 0 });
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
              setOffset({ x: 0, y: 150 });
            }}
            onBlur={() => {
              setSelected3(false);
              setOffset({ x: 0, y: 0 });
            }}
            secureTextEntry // because it is a password
            selectTextOnFocus
          />
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
        </View>
      </ImageBackground>
    </ScrollView>
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
  }
});

export default LoginScreen;
