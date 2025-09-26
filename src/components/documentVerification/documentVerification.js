import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { BadgeCheck, BadgeCheckIcon, X } from "lucide-react-native";
import colors from "../../utils/AppColors";

export default function DocumentVerification({
  icon,
  title,
  state,
  errorMessage,
}) {
  return (
    <View style={styles.parentView}>
      <View style={styles.iconTitleView}>
        {icon && icon}

        <View style={styles.titleErrorView}>
          <Text style={styles.titleText}>{title}</Text>
          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        </View>
      </View>

      {state ? (
        <BadgeCheckIcon color={colors.malachite} />
      ) : (
        <X color={colors.pomegranate} />
      )}
    </View>
  );
}
