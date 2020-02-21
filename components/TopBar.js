import React, { useState } from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import IconButton from "./IconButton";

import namebar from "../assets/splash-basic-removebg.png";
import pages from "../constants/Pages";
import logoutIcon from "../assets/feathericons/log-out.png";
import starIcon from "../assets/feathericons/star.png";

import { auth } from "../config";

const TopBar = props => {
  const logoutHandler = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to leave?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout Cancelled"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
            auth
            .signOut()
            .then(() => {
              console.log("Signout successful");
            })
            .catch(error => {
              console.log("Couldn't sign out:");
              console.log(error);
            });
          props.switchHandler(pages.startPage);
        } }
      ],
      { cancelable: false }
    );
  };

  const toFavsHandler = () => {
    if (props.favActive) {
      props.switchHandler(pages.homePage);
    } else {
      props.switchHandler(pages.favPage);
    }
  };
  return (
    <View style={styles.topBar}>
      <View style={styles.starButton}>
        <IconButton
          width={Dimensions.get("window").width * 0.1}
          height={Dimensions.get("window").width * 0.1}
          img={logoutIcon}
          onPress={logoutHandler}
        />
      </View>
      <TouchableOpacity
        style={styles.nameArea}
        onPress={() => {
          props.switchHandler(pages.homePage);
        }}
      >
        <Image
          source={namebar}
          style={styles.nameButton}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.cameraButton}>
        <IconButton
          width={Dimensions.get("window").width * 0.1}
          height={Dimensions.get("window").width * 0.1}
          img={starIcon}
          active={props.favActive}
          onPress={() => toFavsHandler()}
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
  cameraButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default TopBar;
