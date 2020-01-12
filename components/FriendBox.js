import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";

const FriendBox = props => {
  const friendHandler = () => {
    console.log("Clicked on friend: ");
    //setCurrPage("");
  };

  return (
    <TouchableWithoutFeedback onPress={friendHandler}>
      <View flexDirection="row">
        {/* Profile Picture Styles */}
        <View style={styles.imgCont}>
          <Image
            // resizeMode="cover" // Note: profile pictures should enforce square aspect ratio because of "cover" resize mode
            style={styles.imgStyles}
            source={props.profPic}
          />
        </View>
        {/* Text Styles */}
        <View style={styles.textCont}>
          <Text style={styles.nameStyles}>{props.name}</Text>
          <Text style={styles.mutualStyles}>{props.numFriends}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imgCont: {
    width: Dimensions.get("window").width * 0.17,
    height: Dimensions.get("window").width * 0.17,
    paddingBottom: Dimensions.get("window").width * 0.02,
    alignSelf: "flex-start"
  },
  imgStyles: {
    resizeMode: "cover",
    flex: 1,
    width: undefined,
    height: undefined,
    borderWidth: 1
  },
  textCont: {
    paddingTop: Dimensions.get("window").width * 0.02,
    paddingLeft: Dimensions.get("window").width * 0.03
  },
  nameStyles: {
    borderWidth: 0,
    paddingBottom: 10,
    fontWeight: "bold"
  },
  mutualStyles: {
    borderWidth: 0,
    paddingTop: -5
  }
});

export default FriendBox;
