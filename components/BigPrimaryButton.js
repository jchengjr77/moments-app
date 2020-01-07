import React from "react";
import AwesomeButton from "react-native-really-awesome-button";
import colors from "../constants/Colors";

const BigPrimaryButton = props => {
  return (
    <AwesomeButton
      backgroundColor={colors.primaryButton}
      backgroundDarker={colors.primaryButtonDark}
      backgroundShadow={colors.primaryButtonShadow}
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

export default BigPrimaryButton;
