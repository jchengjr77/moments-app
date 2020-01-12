import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import StartScreen from "./screens/StartScreen";
import SignupScreen from "./screens/SignupScreen";
import FriendScreen from "./screens/FriendScreen";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currPage, setCurrPage] = useState("start");

  const handleLoadError = error => {
    console.warn(error);
  };

  //write swtiching function
  //pass the switching as prop to startscreen object
  //in startscreen.js use the function by doing props.propname("string");

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

  let content = <FriendScreen />;

  if (currPage === "start") {
    content = <FriendScreen />;
  } else if (currPage === "signup") {
    content = <SignupScreen />;
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
