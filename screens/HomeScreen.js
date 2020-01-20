import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import TopBar from "../components/TopBar";
import pages from "../constants/Pages";

// Icon imports
import bookIcon from "../assets/feathericons/book-open.png";
import starIcon from "../assets/feathericons/star.png";
import friendsIcon from "../assets/feathericons/users.png";
import IconButton from "../components/IconButton";
// End

const HomeScreen = props => {
  const toFriendsHandler = () => {
    console.log("Friends Button Pressed");
    props.switchHandler(pages.friendsPage);
  };

  const toLibHandler = () => {
    console.log("Library Button Pressed");
    // ! Create Library page and switch to it
  };

  const toFavsHandler = () => {
    console.log("Favorites Button Pressed");
    props.switchHandler(pages.favsPage);
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
          onPress={toFriendsHandler}
        />
        <IconButton
          width={Dimensions.get("window").width * 0.25}
          img={bookIcon}
          onPress={toLibHandler}
        />
        <IconButton
          width={Dimensions.get("window").width * 0.25}
          img={starIcon}
          onPress={toFavsHandler}
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
