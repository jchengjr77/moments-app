import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorChanger from "./components/ColorChanger";

const colors = ["#f4976c", "#fbe8a6", "#d2fdff", "#b4dfe5"];

export default function App() {
  const [bgColor, setbgColor] = useState(0);

  const changeColorHandler = () => {
    setbgColor((bgColor + 1) % colors.length);
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors[bgColor] }}>
      <Text style={styles.titleText}>Moments by SVJ</Text>
      <ColorChanger
        changeColor={() => {
          changeColorHandler();
          console.log("Changing index: " + bgColor);
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
    color: "#303c6c",
    fontSize: 30,
    fontWeight: "300"
  }
});
