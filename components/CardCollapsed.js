import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import colors from "../constants/Colors";
import favoriteUnselected from "../assets/feathericons/star.png";
import favoriteSelected from "../assets/feathericons/filled-star.png";

const CardCollapsed = props => {
  const { title, date, wasFavorited } = props;
  const [favorited, setFavorited] = useState(wasFavorited);
  return (
    <View>
      <View style={styles.bottomShadow}>
        <View style={styles.topShadow}>
          <View style={styles.cardBody}>
            <View style={styles.titleContainer}>
              {/* Card Title  */}
              <View style={styles.textBox}>
                <Text style={styles.titleText}>{title}</Text>
              </View>

              {/* Favorite Button  */}
              <View style={styles.favoriteContainer}>
                <TouchableWithoutFeedback
                  onPress={() => setFavorited(!favorited)}
                >
                  <Image
                    source={favorited ? favoriteSelected : favoriteUnselected}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>

            {/* Date */}
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topShadow: {
    shadowRadius: 14,
    shadowOpacity: 1,
    shadowOffset: {
      width: -12,
      height: -12
    },
    shadowColor: "#FFFFFF",
    elevation: 4
  },
  bottomShadow: {
    shadowRadius: 6,
    shadowOpacity: 0.75,
    shadowOffset: {
      width: 7,
      height: 7
    },
    shadowColor: "#C0C0C0",
    elevation: 4
  },
  cardBody: {
    flexDirection: "column",
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.13,
    borderRadius: 10,
    backgroundColor: "#F0F0F0"
  },
  titleContainer: {
    flex: 3,
    flexDirection: "row",
    paddingLeft: Dimensions.get("window").width * 0.08,
    paddingTop: Dimensions.get("window").width * 0.03
  },
  titleText: {
    flex: 1,
    fontSize: 30,
    fontWeight: "300",
    color: colors.primary,
    alignItems: "flex-start"
  },
  favoriteContainer: {
    position: "absolute",
    top: Dimensions.get("window").width * 0.05,
    right: Dimensions.get("window").width * 0.05
  },
  bodyContainer: {
    flex: 18,
    marginLeft: Dimensions.get("window").width * 0.08,
    marginRight: Dimensions.get("window").width * 0.08
  },
  bodyText: {
    fontSize: 24,
    color: colors.primary
  },
  bottomBar: {
    flex: 2,
    flexDirection: "row",
    marginLeft: Dimensions.get("window").width * 0.08,
    marginRight: Dimensions.get("window").width * 0.08
  },
  redTag: {
    width: 50,
    height: 30,
    borderRadius: 7,
    backgroundColor: "#FF000070",
    alignItems: "center",
    justifyContent: "center"
  },
  greenTag: {
    width: 50,
    height: 30,
    borderRadius: 7,
    backgroundColor: "#00FF0070",
    alignItems: "center",
    justifyContent: "center"
  },
  blueTag: {
    width: 50,
    height: 30,
    borderRadius: 7,
    backgroundColor: "#0000FF70",
    alignItems: "center",
    justifyContent: "center"
  },
  tagText: {
    fontWeight: "bold",
    color: colors.primary
  },
  dateText: {
    color: "#a9adbf",
    fontSize: 20
  },
  dateContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: Dimensions.get("window").width * 0.08,
    paddingBottom: Dimensions.get("window").width * 0.03
  },
  textBox: {
    width: Dimensions.get("window").width * 0.58,
    height: "auto"
  }
});

export default CardCollapsed;
