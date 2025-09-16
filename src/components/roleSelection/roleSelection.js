import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { roles } from "../../utils/Data";

export default function RoleSelection({ selected, onSelection }) {
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
            {role.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
