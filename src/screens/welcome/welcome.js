import { View, Text } from "react-native";
import React from "react";
import commonStyles from "../../utils/commonStyles";
import { fonts } from "../../utils/fonts";
import { Button, Input } from "../../components";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import colors from "../../utils/AppColors";

export default function Welcome() {
  return (
    <View style={commonStyles.parentView}>
      <Text style={{ fontFamily: fonts.regular }}>welcome</Text>

      <Button title="Get Started" />

      <Input
        placeholder="Enter Text"
        icon={<FontAwesome name="user" size={20} color={colors.ebonyClays} />}
      />
    </View>
  );
}
