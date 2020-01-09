import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "react-native-really-awesome-button/src/styles";

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default HomeScreen;
