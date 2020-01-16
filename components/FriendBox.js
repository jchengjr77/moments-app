import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import deleteFriend from "../assets/trash.png";
import sendLove from "../assets/heart.png";

const FriendBox = props => {
  const friendHandler = name => {
    console.log("Clicked on friend: " + name);
    //setCurrPage("");
  };
  const deleteHandler = name => {
    console.log("Deleted Friend: " + name);
    //setCurrPage("");
  };

  const loveHandler = name => {
    console.log("Sent Love to Friend: " + name);
    //setCurrPage("");
  };

  return (
    <TouchableWithoutFeedback onPress={friendHandler.bind(this, props.name)}>
      <View flexDirection="row">
        {/* Profile Picture Styles */}
        <View style={styles.imgCont}>
          <Image
            // resizeMode="cover" // Note: profile pictures should enforce square aspect ratio because of "cover" resize mode
            style={styles.imgStyles}
            source={{uri : props.profPic}}
          />
        </View>
        {/* Text Styles */}
        <View style={styles.textCont} flex={9}>
          <Text style={styles.nameStyles}>{props.name}</Text>
          <Text style={styles.mutualStyles}>{props.numFriends + " mutual friends"}</Text>
        </View>
        {/* Send Love */}
        <View style={styles.builtinCont}>
          <TouchableHighlight
            onPress={loveHandler.bind(this, props.name)}
            underlayColor="#D2FDFF"
          >
            <View style={styles.builtinView}>
              <Image style={styles.builtinImg} source={sendLove} />
            </View>
          </TouchableHighlight>
        </View>
        {/* Spacing */}
        <View style={styles.builtinCont}>
          <View></View>
        </View>
        {/* Delete Friend */}
        <View style={styles.builtinCont}>
          <TouchableHighlight
            onPress={deleteHandler.bind(this, props.name)}
            underlayColor="#D2FDFF"
          >
            <View style={styles.builtinView}>
              <Image style={styles.builtinImg} source={deleteFriend} />
            </View>
          </TouchableHighlight>
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
  },
  builtinCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  builtinView: {
    width: Dimensions.get("window").width * 0.06,
    height: Dimensions.get("window").width * 0.06,
    alignSelf: "flex-end"
  },
  builtinImg: {
    flex: 1,
    height: undefined,
    width: undefined
  }
});

export default FriendBox;
