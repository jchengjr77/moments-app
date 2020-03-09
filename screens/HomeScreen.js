import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import MomentCard from "../components/MomentCard";
import { AppLoading } from "expo";

import { db, auth } from "../config";

const HomeScreen = props => {
  const [loaded, setLoaded] = useState(false);
  const [card, setCard] = useState({});
  const [key, setKey] = useState("");

  const userID = auth.currentUser.uid;
  const userRef = db.ref("users/" + userID + "/moments");

  async function loadAsyncData() {
    let tmp = [];
    let tmpKey = "";
    userRef
      .orderByKey()
      .once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnap) {
          tmpKey = childSnap.key;
          let thisMomentObj = childSnap.val();
          tmp.push(thisMomentObj);
        });
      })
      .then(() => {
        let randI = Math.floor(Math.random() * tmp.length);
        setCard(tmp[randI]);
        setKey(tmpKey);
      });
  }

  const handleLoadComplete = () => {
    setLoaded(true);
  };

  const handleLoadError = error => {
    console.warn(error);
  };

  const performDelete = key => {
    userRef
      .child(key)
      .remove()
      .then(loadAsyncData);
  };

  const deleteHandler = (title, key) => {
    Alert.alert(
      "Delete Moment",
      'Are you sure you want to delete "' + title + '"?',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => performDelete(key) }
      ],
      { cancelable: true }
    );
  };

  if (loaded) {
    return (
      <View style={styles.screen}>
        <TopBar switchHandler={props.switchHandler} favActive={false} />
        <View style={styles.mainCard}>
          <MomentCard
            title={card.title}
            bodyText={card.body}
            date={card.date}
            deleteHandler={() =>
              deleteHandler(card.title, key)
            }
          />
        </View>
        <BottomBar switchHandler={props.switchHandler} active="home" />
      </View>
    );
  } else {
    // AppLoading component loads all resouces first
    return (
      <AppLoading
        startAsync={loadAsyncData}
        onError={handleLoadError}
        onFinish={handleLoadComplete}
      />
    );
  }
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
  }
});

export default HomeScreen;
