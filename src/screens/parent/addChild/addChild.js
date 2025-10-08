import { View, Text, Image } from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Button } from "../../../components";
import Images from "../../../assets/images";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";

export default function AddChild() {
  const navigation = useNavigation();

  const handleAddChild = () => {
    navigation.navigate(ScreensName.CREATECHILDPROFILE);
  };
  return (
    <StatusBarWrapper>
      <Image
        source={Images.ADDCHILD}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.addText}>Add Child</Text>

      <Text style={styles.loremText}>
        Add your child's information to start creating their profile.
      </Text>


      <Button title={"Add child"} onPress={handleAddChild} />
    </StatusBarWrapper>
  );
}
