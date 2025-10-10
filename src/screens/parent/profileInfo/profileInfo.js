import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import Images from "../../../assets/images";
import styles from "./styles";
import { Button, DropDown, DropDownList, Input } from "../../../components";
import colors from "../../../utils/AppColors";
import { relationships } from "../../../utils/Data";
import { height } from "../../../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import { User, Users, Phone } from "lucide-react-native";
import { storeValue } from "../../../utils/Methods";

export default function ProfileInfo() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState(""); // Only store digits after +41
  const [isDisplayRelationList, setIsDisplayRelationList] = useState(false);

  const toggleRelationList = () => {
    setIsDisplayRelationList(!isDisplayRelationList);
  };

  const handleSave = async () => {
    console.log("Name:", name);
    console.log("Selected Relation:", relationship);
    console.log("Full Phone:", "+41" + phone);
    await storeValue("parentData", {
      name: name,
      isLogin: true,
    });
    navigation.navigate(ScreensName.ADDCHILD);
  };

  const prefix = "+41 ";

  const handlePhoneChange = (text) => {
    // Remove prefix if user tries to type it
    const cleanText = text.replace(prefix, "");
    // Allow only numbers
    const onlyNumbers = cleanText.replace(/[^0-9]/g, "");
    setPhone(onlyNumbers);
  };

  const displayedPhone = prefix + phone;

  return (
    <StatusBarWrapper>
      <Image
        source={Images.PARENTPROFILEINFO}
        style={styles.imageStyle}
        resizeMode="contain"
      />

      <Text style={styles.basicText}>Enter basic profile info</Text>

      <Text style={styles.loremText}>
        Please fill in your basic details below to complete your profile setup.
      </Text>

      {/* Name Input */}
      <Input
        state={name}
        setState={setName}
        placeholder="Enter your name here"
        icon={<User size={20} color={colors.ebonyClay} />}
      />

      {/* Relationship Dropdown (optional) */}
      {isDisplayRelationList && (
        <DropDownList
          lst={relationships}
          selectedRelation={relationship}
          setSelectedRelation={setRelationship}
          setDropDownVisible={setIsDisplayRelationList}
        />
      )}

      {/* ✅ Custom Phone Input */}
      <View style={styles.textContainer}>
        <Phone size={20} color={colors.ebonyClay} style={{ marginRight: 8 }} />
        <TextInput
          style={styles.textStyle}
          value={displayedPhone}
          onChangeText={handlePhoneChange}
          placeholder="+41 XXXXXXXX"
          keyboardType="numeric"
          maxLength={12}
          selection={{
            start: displayedPhone.length,
            end: displayedPhone.length,
          }}
        />
      </View>

      <Button
        title="Save"
        onPress={handleSave}
        btnStyle={{ marginTop: isDisplayRelationList ? height(5) : height(13) }}
      />
    </StatusBarWrapper>
  );
}
