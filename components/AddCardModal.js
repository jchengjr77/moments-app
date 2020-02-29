import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import Modal from "react-native-modal";
import PriButton from "../components/BigPrimaryButton";
import SecButton from "../components/BigSecondaryButton";
import colors from "../constants/Colors";

const AddCardModal = props => {
  const [titleSel, setTitleSel] = useState(false);
  const [bodySel, setBodySel] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [offset, setOffset] = useState(0);

  return (
    <Modal
      isVisible={props.open}
      onBackdropPress={() => {
        setTitle("");
        setBody("");
        props.setOpen(false);
      }}
    >
      <View style={styles.addModal}>
        <Text style={styles.headerText}>Title:</Text>
        <TextInput
          defaultValue={title}
          placeholder="My Moment"
          placeholderTextColor="#AAAAAA"
          onChangeText={text => setTitle(text)}
          maxLength={15}
          style={{
            ...styles.inputField,
            backgroundColor: titleSel ? "#FFFFFF" : "#DDDDDD"
          }}
          onFocus={() => {
            setTitleSel(true);
            setOffset(-175);
          }}
          onBlur={() => {
            setTitleSel(false);
            setOffset(0);
          }}
        />
        <Text style={styles.subtext}>Characters Left: {15 - title.length}</Text>
        <Text style={styles.headerText}>Moment:</Text>
        <TextInput
          defaultValue={body}
          placeholder="What Kind of Music?"
          placeholderTextColor="#AAAAAA"
          onChangeText={text => setBody(text)}
          multiline={true}
          style={{
            ...styles.inputField,
            backgroundColor: bodySel ? "#FFFFFF" : "#DDDDDD",
            height: "30%"
          }}
          onFocus={() => {
            setBodySel(true);
            setOffset(-175);
          }}
          onBlur={() => {
            setBodySel(false);
            setOffset(0);
          }}
        />
        <View style={styles.addButton}>
          <SecButton
            title="Cancel"
            onPress={() => {
              setTitle("");
              setBody("");
              props.setOpen(false);
            }}
          />
          <PriButton
            title="Add"
            onPress={() => {
              setTitle("");
              setBody("");
              props.setOpen(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addModal: {
    height: Dimensions.get("window").height * 0.6,
    width: Dimensions.get("window").width * 0.8,
    backgroundColor: colors.allBackground,
    alignSelf: "center",
    borderRadius: 20,
    padding: "5%"
  },
  headerText: {
    fontSize: 30,
    fontWeight: "200",
    color: colors.primary
  },
  subtext: {
    color: "grey"
  },
  inputField: {
    borderColor: colors.primary,
    borderBottomWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    width: "100%",
    height: "10%",
    color: "black"
  },
  addButton: {
    paddingVertical: "10%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default AddCardModal;
