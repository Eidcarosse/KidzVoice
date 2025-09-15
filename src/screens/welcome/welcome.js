import { View, Text } from "react-native";
import React from "react";
import commonStyles from "../../utils/commonStyles";
import { fonts } from "../../utils/fonts";

export default function Welcome() {
  return (
    <View style={commonStyles.parentView}>
      <Text style={{ fontFamily: fonts.regular }}>welcome</Text>
    </View>
  );
}
