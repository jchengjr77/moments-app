import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorChanger from "./components/ColorChanger";
import colors from "./constants/Colors";
import * as Font from "expo-font";

const backgrounds = [
  colors.darkIce,
  colors.darkOrange,
  colors.lightIce,
  colors.lightOrange
];

export default function App() {
  const [bgColor, setbgColor] = useState(0);

  const changeColorHandler = () => {
    setbgColor((bgColor + 1) % backgrounds.length);
  };

  useEffect(() => {
    Font.loadAsync({
      "montserrat-thin": require("./assets/fonts/Montserrat-Thin.ttf"),
      "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
      "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf")
    });
  });

  return (
    <View
      style={{ ...styles.container, backgroundColor: backgrounds[bgColor] }}
    >
      <Text style={styles.titleText}>Moments by SVJ</Text>
      <ColorChanger
        changeColor={() => {
          changeColorHandler();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    color: colors.primary,
    fontSize: 30,
    fontFamily: "montserrat-medium"
  }
});
