import React, { useState, forceUpdate } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { AppLoading } from "expo";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import CardCollapsed from "../components/CardCollapsed";
import MomentCard from "../components/MomentCard";
import { db, auth } from "../config";

const LibraryScreen = props => {
  const [open, setOpen] = useState(-1);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  let userid = auth.currentUser.uid;
  let userRef = db.ref("users/" + userid + "/moments");

  const handleLoadComplete = () => {
    setLoaded(true);
  };

  const handleLoadError = error => {
    console.warn(error);
  };

  async function loadAsyncData() {
    let tmp = [];
    userRef
      .orderByKey()
      .once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnap) {
          let thisMomentKey = childSnap.key;
          let thisMomentData = childSnap.val();
          let thisMomentObj = {
            key: thisMomentKey,
            data: thisMomentData
          };
          tmp.push(thisMomentObj);
        });
      })
      .then(() => setData(tmp));
  }

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
    // If all content is finished loading
    return (
      <View style={styles.screen}>
        <TopBar switchHandler={props.switchHandler} favActive={false} />
        <View style={styles.mainCard}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.srollingExternContainer}
            contentContainerStyle={styles.scrollingContenterContainer}
          >
            {data.map((momentObj, index) => {
              if (index == open) {
                return (
                  <View style={styles.cardContainer} key={index}>
                    <TouchableWithoutFeedback onPress={() => setOpen(-1)}>
                      <View>
                        <MomentCard
                          title={momentObj.data.title}
                          date={momentObj.data.date}
                          bodyText={momentObj.data.body}
                          deleteHandler={() =>
                            deleteHandler(momentObj.data.title, momentObj.key)
                          }
                        />
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                );
              } else {
                return (
                  <View style={styles.cardContainer} key={index}>
                    <TouchableWithoutFeedback onPress={() => setOpen(index)}>
                      <View>
                        <CardCollapsed
                          title={momentObj.data.title}
                          date={momentObj.data.date}
                          wasFavorited={momentObj.data.favorited}
                          deleteHandler={() =>
                            deleteHandler(momentObj.data.title, momentObj.key)
                          }
                        />
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                );
              }
            })}
          </ScrollView>
        </View>
        <BottomBar
          switchHandler={props.switchHandler}
          doRender={loadAsyncData}
          active="lib"
        />
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
  },
  srollingExternContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingTop: 10
  },
  scrollingContenterContainer: { alignItems: "center" },
  cardContainer: { paddingBottom: Dimensions.get("window").width * 0.05 }
});

export default LibraryScreen;
