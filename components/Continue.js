import React from "react";
import { View, Button, StyleSheet, Dimensions } from "react-native";
import colors from "../constants/Colors";

const Continue = props => {
  return (
    <View style={styles.buttonCont}>
      <View style={styles.button}>
        <Button
          title="Continue"
          onPress={props.continue}
          color={colors.primaryButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: Dimensions.get("window").width,
    backgroundColor: colors.lightButton
  }
});

export default Continue;
