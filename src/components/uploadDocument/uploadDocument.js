import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import * as DocumentPicker from "expo-document-picker";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import colors from "../../utils/AppColors";

export default function UploadDocument({
  state,
  setState,
  title,
  viewStyle,
  textStyle,
}) {
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf", // Specify PDF files only
        copyToCacheDirectory: true, // Optional: copy the file to cache for easier access
      });

      if (result.canceled) {
        console.log("Document picking cancelled");
        return null;
      }

      // Document picked successfully
      const { uri, name, size, mimeType } = result.assets[0]; // Access the first asset in the array
      console.log("Picked document:", { uri, name, size, mimeType });

      if (setState) {
        setState({ uri, name, size, mimeType });
      }
      return { uri, name, size, mimeType };
    } catch (err) {
      console.error("Error picking document:", err);
      return null;
    }
  };
  return (
    <TouchableOpacity
      style={[styles.uploadBtn, viewStyle]}
      onPress={pickDocument}
    >
      <Ionicons
        name="document-text-outline"
        size={18}
        color={colors.blueRibbon}
      />
      <Text style={[styles.uploadText, textStyle]}>
        {state ? state?.name : title ? title : "Submit Reports"}
      </Text>
    </TouchableOpacity>
  );
}
