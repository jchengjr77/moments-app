import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import IconButton from "../components/IconButton";
import pages from "../constants/Pages";

// Icon imports
import bookIcon from "../assets/feathericons/book-open.png";
import starIcon from "../assets/feathericons/star.png";
import friendsIcon from "../assets/feathericons/users.png";
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
  const toFriendsHandler = () => {
    console.log("Friends Button Pressed");
    props.switchHandler(pages.friendsPage);
  };

  const toLibHandler = () => {
    console.log("Library Button Pressed");
    // ! Create Library page and switch to it
    props.switchHandler(pages.homePage);
  };

  const toFavsHandler = () => {
    console.log("Favorites Button Pressed");
    props.switchHandler(pages.favsPage);
  };

  var friendsActive = false;
  var libActive = false;
  var favActive = false;

  if (props.active === "friends") friendsActive = true;
  else if (props.active === "lib") libActive = true;
  else if (props.active === "fav") favActive = true;
  else console.log("Bottom Bar Non-active. ERROR.");

  return (
    <View style={styles.buttonArea}>
      <IconButton
        width={Dimensions.get("window").width * 0.3}
        img={friendsIcon}
        onPress={toFriendsHandler}
        active={friendsActive}
      />
      <IconButton
        width={Dimensions.get("window").width * 0.3}
        img={bookIcon}
        onPress={toLibHandler}
        active={libActive}
      />
      <IconButton
        width={Dimensions.get("window").width * 0.3}
        img={starIcon}
        onPress={toFavsHandler}
        active={favActive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonArea: {
    flex: 2,
    paddingBottom: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: Dimensions.get("window").width
  }
});

export default BottomBar;
