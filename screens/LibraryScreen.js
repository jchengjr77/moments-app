import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import CardCollapsed from "../components/CardCollapsed";
import data from "../data/LibraryData";

const LibraryScreen = props => {
  return (
    <View style={styles.screen}>
      <TopBar switchHandler={props.switchHandler} favActive={false} />
      <View style={styles.mainCard}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.srollingExternContainer}
          contentContainerStyle={styles.scrollingContenterContainer}
        >
          {data.map(moment => {
            return (
              <View style={styles.cardContainer} key={moment.id}>
                <CardCollapsed
                  title={moment.title}
                  date={moment.date}
                  wasFavorited={moment.favorited}
                />
              </View>
            );
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
    justifyContent: "center"
  },
  mainCard: {
    flex: 6,
    justifyContent: "center"
  },
  srollingExternContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  scrollingContenterContainer: { alignItems: "center" },
  cardContainer: { paddingBottom: Dimensions.get("window").width * 0.05 }
});

export default LibraryScreen;
