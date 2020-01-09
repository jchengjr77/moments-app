/**
 * At the time that I'm writing this comment, this component is useless.
 * Ignore it for now.
 *
 * * NOTE: Do not delete, in case of future use.
 */

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
