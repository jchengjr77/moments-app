import React from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import IconButton from "./IconButton";

import namebar from "../assets/splash-basic-removebg.png";
import pages from "../constants/Pages";
import menuIcon from "../assets/feathericons/menu.png";
import cameraIcon from "../assets/feathericons/camera.png";

const TopBar = props => {
  return (
    <View style={styles.topBar}>
      <View style={styles.starButton}>
        <IconButton
          width={Dimensions.get("window").width * 0.1}
          height={Dimensions.get("window").width * 0.1}
          img={menuIcon}
        />
      </View>
      <TouchableHighlight
        onPress={() => {
          props.switchHandler(pages.startPage);
        }}
        style={styles.nameArea}
      >
        <Image
          source={namebar}
          style={styles.nameButton}
          resizeMode="contain"
        />
      </TouchableHighlight>
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
