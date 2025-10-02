import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../utils/AppColors";

export default function DropDownList({
  lst,
  selectedRelation,
  setSelectedRelation,
  setDropDownVisible,
}) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item.id);
    // onSelect?.(item);
    setSelectedRelation(item?.title);
    if (setDropDownVisible) {
      setDropDownVisible(false);
    }
  };
  return (
    <View style={styles.parentView}>
      {/* <Text style={styles.textStyle}>DropDownList</Text> */}

      <FlatList
        data={lst}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.option,
              index === lst.length - 1 && { borderBottomWidth: 0 },
            ]}
            onPress={() => handleSelect(item)}
          >
            <Text style={[styles.textStyle]}>{item.title}</Text>
            <Ionicons
              name={
                selectedRelation === item.title
                  ? "radio-button-on"
                  : "radio-button-off"
              }
              size={18}
              color={colors.dodgerBlue}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
