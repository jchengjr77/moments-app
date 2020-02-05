import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import IconButton from "../components/IconButton";
import pages from "../constants/Pages";

// Icon imports
import bookIcon from "../assets/feathericons/book-open.png";
import starIcon from "../assets/feathericons/star.png";
import friendsIcon from "../assets/feathericons/users.png";
import FriendScreen from "../screens/FriendScreen";
// End

/**
 * * Key Features:
 * @param props.active
 *      This prop is a string, which controls the button that is actively
 *      highlighted. There are three options that are scanned for:
 *          - "friends"
 *          - "lib"
 *          - "favs"
 *      Depending on which string is fed in as the 'active' prop, then
 *      the buttons on the bottom will highlight differently.
 *  @param props.switchHandler
 *      This is a function fed in through the props to handle page switching.
 *      The switchHandler function should be passed all the way from App.js,
 *      because the App.js level controls all page switches, so that function
 *      should talk directly to the top.
 */

const BottomBar = props => {
  const toFriendsHandler = active => {
    console.log("Friends Button Pressed");
    if (active) {
      props.switchHandler(pages.homePage);
    } else {
      props.switchHandler(pages.friendsPage);
    }
  };

  const toLibHandler = active => {
    console.log("Library Button Pressed");
    if (active) {
      props.switchHandler(pages.homePage);
    } else {
      props.switchHandler(pages.libPage);
    }
  };

  const toFavsHandler = active => {
    console.log("Favorites Button Pressed");
    if (active) {
      props.switchHandler(pages.homePage);
    } else {
      props.switchHandler(pages.favsPage);
    }
  };

  let friendsActive,
    libActive,
    favActive = false;

  switch (props.active) {
    case "friends":
      friendsActive = true;
      break;
    case "lib":
      libActive = true;
      break;
    case "fav":
      favActive = true;
      break;
    default:
      console.log("Bottom Bar Inactive.");
      break;
  }

  return (
    <View style={styles.buttonArea}>
      <IconButton
        width={Dimensions.get("window").width * 0.3}
        img={friendsIcon}
        onPress={() => toFriendsHandler(friendsActive)}
        active={friendsActive}
      />
      <IconButton
        width={Dimensions.get("window").width * 0.3}
        img={bookIcon}
        onPress={() => toLibHandler(libActive)}
        active={libActive}
      />
      <IconButton
        width={Dimensions.get("window").width * 0.3}
        img={starIcon}
        onPress={() => toFavsHandler(favActive)}
        active={favActive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonArea: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: Dimensions.get("window").width 
  }
});

export default BottomBar;
