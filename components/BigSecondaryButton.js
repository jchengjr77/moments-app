import React from "react";
import AwesomeButton from "react-native-really-awesome-button";
import colors from "../constants/Colors";

const BigSecondaryButton = props => {
  return (
    <AwesomeButton
      backgroundColor={colors.secondaryButton}
      backgroundDarker={colors.secondaryButtonDark}
      backgroundShadow={colors.secondaryButtonShadow}
      raiseLevel={4}
      textFontFamily="montserrat-bold"
      textSize={20}
      onPress={props.onPress}
      width={props.width}
      height={props.height}
      style={props.style}
    >
      {props.title}
    </AwesomeButton>
  );
};

export default BigSecondaryButton;
