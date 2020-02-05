/**
 * * Button containing icon
 * This is a simple component for creating a button containing an icon.
 * Use cases for this would be back buttons, head buttons, saves, etc.
 *
 * * Key Features
 *    Added an active prop. If this button is "active", then it will render
 *    slightly darker, and also be depressed to level 1, instead of raised
 *    to level 3.
 */

import React from "react";
import { Image } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import colors from "../constants/Colors";

const IconButton = props => {
  var bgColor = colors.lightOrange;
  var activeLevel = 3;

  if (props.active) {
    activeLevel = 1;
    bgColor = colors.medOrange;
  }

  return (
    <AwesomeButton
      backgroundColor={bgColor}
      raiseLevel={activeLevel}
      width={props.width}
      height={props.height}
      onPress={props.onPress}
    >
      <Image source={props.img} />
    </AwesomeButton>
  );
};

export default IconButton;
