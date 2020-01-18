import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import IconButton from "./IconButton";

// Icon imports
import cameraIcon from "../assets/feathericons/camera.png";
import starIcon from "../assets/feathericons/star.png";
import namebar from "../assets/splash-basic-removebg.png";
// End

const TopBar = props => {
  return (
    <View style={styles.topBar}>
      <View style={styles.starButton}>
        <IconButton
          width={Dimensions.get("window").width * 0.1}
          height={Dimensions.get("window").width * 0.1}
          img={starIcon}
        />
      </View>
      <View style={styles.nameArea}>
        <Image
          source={namebar}
          style={styles.nameButton}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cameraButton}>
        <IconButton
          width={Dimensions.get("window").width * 0.1}
          height={Dimensions.get("window").width * 0.1}
          img={cameraIcon}
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
  starButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  nameArea: {
    flex: 3,
    alignItems: "center",
    paddingLeft: 10
  },
  nameButton: {
    flex: 1,
    width: "100%",
    height: undefined
  },
  cameraButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default TopBar;
