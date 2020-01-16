import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import StartScreen from "./screens/StartScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import pages from "./constants/Pages";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currPage, setCurrPage] = useState(pages.startPage);

  const handleLoadError = error => {
    console.warn(error);
  };

  /**
   * * Switching function
   * This is the main mechanism for switching pages.
   * To add a new page to switch to, just add a key string of your choice.
   * Could be anything you want, as long is the if statement below regarding
   * currPage also scans for that specific key string.
   */
  const handleSwitchPages = keyString => {
    /**
     * ! This needs some error checking
     */
    console.log("Switching to page: " + keyString);
    setCurrPage(keyString);
  };

  const handleLoadComplete = () => {
    setLoaded(true);
  };

  // Load all fonts before app loads
  async function loadAsyncResources() {
    await Promise.all([
      Font.loadAsync({
        "montserrat-thin": require("./assets/fonts/Montserrat-Thin.ttf"),
        "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
        "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
        "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf")
      })
    ]);
  }

  /**
   * This content variable will change according to which page user is on.
   * Use different key strings to manage the pages.
   */
  let content = <StartScreen />;

  /**
   * If statement controlling page display. It's gonna get big.
   */
  if (currPage === pages.startPage) {
    content = <StartScreen switchHandler={handleSwitchPages} />;
  } else if (currPage === pages.signupPage) {
    content = <SignupScreen switchHandler={handleSwitchPages} />;
  } else if (currPage === pages.loginPage) {
    content = <LoginScreen switchHandler={handleSwitchPages} />; // ! Temporary
  } else if (currPage === pages.homePage) {
    content = <HomeScreen switchHandler={handleSwitchPages} />;
  }

  if (loaded) {
    // If all content is finished loading
    return <View style={styles.screen}>{content}</View>;
  } else {
    // AppLoading component loads all resouces first
    return (
      <AppLoading
        startAsync={loadAsyncResources}
        onError={handleLoadError}
        onFinish={handleLoadComplete}
      />
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
