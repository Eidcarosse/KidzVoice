import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import Images from "../../../assets/images";
import styles from "./styles";
import { Button, DropDown, DropDownList, Input } from "../../../components";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import colors from "../../../utils/AppColors";
import { Bell } from "lucide-react-native";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { relationships } from "../../../utils/Data";
import { height } from "../../../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";

export default function ProfileInfo() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");
  const [isDisplayRelationList, setIsDisplayRelationList] = useState(false);

  const toggleRelationList = () => {
    setIsDisplayRelationList(!isDisplayRelationList);
  };

  const handleSave = () => {
    console.log("Name:", name);

    console.log("Selected Relation:", relationship);
    console.log("Phone:", phone);

    navigation.navigate(ScreensName.ADDCHILD);
  };
  return (
    <StatusBarWrapper>
      <Image
        source={Images.PARENTPROFILEINFO}
        style={styles.imageStyle}
        resizeMode="contain"
      />

      <Text style={styles.basicText}>Enter basic profile info</Text>

      <Text style={styles.loremText}>
        Lorem Ipsum is simply dummy text of the printing
      </Text>

      <Input
        state={name}
        setState={setName}
        placeholder="Enter your name here"
        icon={<FontAwesome name="user" size={20} color={colors.ebonyClay} />}
      />

      <DropDown
        state={relationship}
        setState={setRelationship}
        onPress={toggleRelationList}
        isDisplayRelationList={isDisplayRelationList}
        placeholder={"Relationship with child"}
        icon={<Feather name="users" size={20} color={colors.ebonyClay} />}
      />
      {isDisplayRelationList && (
        <DropDownList
          lst={relationships}
          selectedRelation={relationship}
          setSelectedRelation={setRelationship}
          setDropDownVisible={setIsDisplayRelationList}
        />
      )}

      <Input
        state={phone}
        setState={setPhone}
        placeholder="0300 0404040"
        icon={<Bell size={24} color={colors.ebonyClay} strokeWidth={2} />}
      />

      <Button
        title="Save"
        onPress={handleSave}
        btnStyle={{ marginTop: isDisplayRelationList ? height(5) : height(13) }}
      />
    </StatusBarWrapper>
  );
}
