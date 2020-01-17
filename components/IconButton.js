/**
 * * Button containing icon
 * This is a simple component for creating a button containing an icon.
 * Use cases for this would be back buttons, head buttons, saves, etc.
 */

import React from "react";
import { Image } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import colors from "../constants/Colors";

const IconButton = props => {
  return (
    <AwesomeButton
      backgroundColor={colors.lightOrange}
      backgroundDarker={colors.primaryButton}
      backgroundShadow={colors.primaryButtonShadow}
      raiseLevel={0}
      width={props.width}
    >
      <Image source={props.img} />
    </AwesomeButton>
  );
};

export default IconButton;
