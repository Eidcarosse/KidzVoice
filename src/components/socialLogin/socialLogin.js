import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import Images from "../../assets/images";

export default function SocialLogin({ title, image, onPress }) {
  return (
    <TouchableOpacity style={styles.parentView} onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>

      <View style={styles.imageView}>
        <Image source={image} style={styles.imageStyle} />
      </View>
    </TouchableOpacity>
  );
}
