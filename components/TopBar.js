import React from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";

// Icon imports
import namebar from "../assets/splash-basic-removebg.png";
// End

const TopBar = props => {
  return (
    <View style={styles.topBar}>
      <View style={styles.nameArea}>
        <Image
          source={namebar}
          style={styles.nameButton}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.2
  },
  nameArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 65,
    marginRight: 65,
    marginTop: 20
  },
  nameButton: {
    flex: 1,
    width: "100%",
    height: undefined
  }
});

export default TopBar;
