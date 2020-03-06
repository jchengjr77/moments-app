import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import colors from "../constants/Colors";
import favoriteUnselected from "../assets/feathericons/star.png";
import favoriteSelected from "../assets/feathericons/filled-star.png";
import deleteCard from "../assets/feathericons/trash.png";

const CardCollapsed = props => {
  const { title, date, wasFavorited } = props;
  const [favorited, setFavorited] = useState(wasFavorited);

  const deleteHandler = name => {
    console.log("Deleted Card: " + name);
  };

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

            {/* Bottom Row */}
            <View style={styles.bottomRowContainer}>
              <Text style={styles.dateText}>{date}</Text>

              <View style={styles.deleteButton}>
                <TouchableWithoutFeedback
                  onPress={deleteHandler.bind(this, "card")}
                >
                  <View style={styles.builtinView}>
                    <Image style={styles.builtinImg} source={deleteCard} />
                  </View>
                </TouchableWithoutFeedback>
              </View>
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
  tagText: {
    fontWeight: "bold",
    color: colors.primary
  },
  dateText: {
    color: "#a9adbf",
    fontSize: 20
  },
  bottomRowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft: Dimensions.get("window").width * 0.08,
    paddingBottom: Dimensions.get("window").width * 0.05
  },
  textBox: {
    width: Dimensions.get("window").width * 0.58,
    height: "auto"
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
  },
  deleteButton: {
    paddingRight: Dimensions.get("window").width * 0.05,
    paddingBottom: Dimensions.get("window").width * 0.03
  }
});

export default CardCollapsed;
