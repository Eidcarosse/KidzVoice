import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { height, width } from "../../../../utils/Dimensions";
import { fonts } from "../../../../utils/fonts";
import SuccessModal from "../../../../components/successModal/success";
import { Button } from "../../../../components";

export default function FeelingResult({ isBtn, onPress, image, text }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      {isBtn && <Button title={"Next"} onPress={onPress} btnStyle={{ width: width(90), marginTop: 12 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: height(10),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  image: {
    width: width(60),
    height: height(30),
    resizeMode: "contain",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.regular,
    textAlign: "center",
    color: "#333",
    paddingHorizontal: 14,
  },
});
