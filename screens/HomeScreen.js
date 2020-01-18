import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import TopBar from "../components/TopBar";
import AwesomeButton from "react-native-really-awesome-button";
import colors from "../constants/Colors";

// Icon imports
import bookIcon from "../assets/feathericons/book-open.png";
import menuIcon from "../assets/feathericons/menu.png";
import friendsIcon from "../assets/feathericons/users.png";
import IconButton from "../components/IconButton";
// End

const HomeScreen = props => {
  const backHandler = () => {
    console.log("Back Button Pressed");
    props.switchHandler(pages.signupPage);
  };

  const forwardHandler = () => {
    console.log("Continue Button Pressed");
  };

  return (
    <View style={styles.screen}>
      <TopBar />
      <View style={styles.mainCard}>
        <Text>Main Card</Text>
      </View>
      <View style={styles.buttonArea}>
        <IconButton
          width={Dimensions.get("window").width * 0.25}
          img={friendsIcon}
        />
        <IconButton
          width={Dimensions.get("window").width * 0.25}
          img={bookIcon}
        />
        <IconButton
          width={Dimensions.get("window").width * 0.25}
          img={menuIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainCard: {
    flex: 6,
    justifyContent: "center"
  },
  buttonArea: {
    flex: 2,
    paddingBottom: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: Dimensions.get("window").width
  }
});

export default HomeScreen;
