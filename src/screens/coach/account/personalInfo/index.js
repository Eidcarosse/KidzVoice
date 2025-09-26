import { View, Text } from "react-native";
import React from "react";
import { Button, Input } from "../../../../components";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function PersonalInfo({
  name,
  setName,
  dob,
  setDob,
  contact,
  setContact,
  onPress,
}) {
  return (
    <KeyboardAwareScrollView>
      {/* <View> */}
      <Text style={styles.personalText}>Personal info</Text>

      <Text style={styles.titleText}>Name</Text>

      <Input placeholder={"Usman Khan"} state={name} setState={setName} />

      <Text style={styles.titleText}>Date of birth</Text>

      <Input
        placeholder={"Acceptance and Commitment Therapy (ACT)"}
        state={dob}
        setState={setDob}
      />

      <Text style={styles.titleText}>Contact</Text>

      <Input
        placeholder={"Acceptance and Commitment Therapy (ACT)"}
        state={contact}
        setState={setContact}
      />

      <Button title={"Next"} onPress={onPress} btnStyle={styles.nextButton} />
      {/* </View> */}
    </KeyboardAwareScrollView>
  );
}
