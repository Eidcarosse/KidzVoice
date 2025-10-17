import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { roles } from "../../utils/Data";
import { useTranslation } from "react-i18next";

export default function RoleSelection({ selected, onSelection }) {
  const { t } = useTranslation();
  const handleSelect = (role) => {
    onSelection?.(role); // pass selected role back to parent if needed
  };
  return (
    <View style={styles.container}>
      {roles.map((role) => (
        <TouchableOpacity
          key={role.id}
          style={[
            styles.roleItem,
            selected?.id === role.id && styles.selectedRoleItem, // highlight selected
          ]}
          onPress={() => onSelection(role)}
        >
          <Text
            style={[
              styles.roleText,
              selected?.id === role.id && styles.selectedRoleText,
            ]}
          >
            {t(`roleSelection.${role.label}`)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
