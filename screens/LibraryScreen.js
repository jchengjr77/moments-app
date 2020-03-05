import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import CardCollapsed from "../components/CardCollapsed";
import MomentCard from "../components/MomentCard";
import data from "../data/LibraryData";

const LibraryScreen = props => {
  [open, setOpen] = useState(-1);
  return (
    <View style={styles.screen}>
      <TopBar switchHandler={props.switchHandler} favActive={false} />
      <View style={styles.mainCard}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.srollingExternContainer}
          contentContainerStyle={styles.scrollingContenterContainer}
        >
          {data.map((moment, index) => {
            if (index == open) {
              return (
                <View style={styles.cardContainer} key={moment.id}>
                  <TouchableWithoutFeedback onPress={() => setOpen(-1)}>
                    <View>
                      <MomentCard
                        title={moment.title}
                        date={moment.date}
                        bodyText={moment.body}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              );
            } else {
              return (
                <View style={styles.cardContainer} key={moment.id}>
                  <TouchableWithoutFeedback onPress={() => setOpen(index)}>
                    <View>
                    <CardCollapsed
                      title={moment.title}
                      date={moment.date}
                      wasFavorited={moment.favorited}
                    />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
      <BottomBar switchHandler={props.switchHandler} active="lib" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
