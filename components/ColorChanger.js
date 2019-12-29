import React from "react";
import { View, Button, StyleSheet } from "react-native";

const ColorChanger = props => {
  return (
    <View style={styles.buttonCont}>
      <Button title="Let's Go" onPress={props.changeColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCont: {
    //   No styling necessary
  }
});

export default ColorChanger;
