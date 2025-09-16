import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";
import Images from "../../../assets/images";
import { Button, DropDown, DropDownList, Input } from "../../../components";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import colors from "../../../utils/AppColors";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import { relationships } from "../../../utils/Data";
import { height } from "../../../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";

export default function CreateChildProfile() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [grade, setGrade] = useState("");
  const [isDisplayGradeList, setIsDisplayGradeList] = useState(false);

  const [school, setSchool] = useState("");
  const [isDisplaySchoolList, setIsDisplaySchoolList] = useState(false);

  const toggleGradeList = () => {
    setIsDisplayGradeList(!isDisplayGradeList);
  };

  const toggleSchoolList = () => {
    setIsDisplaySchoolList(!isDisplaySchoolList);
  };

  const handleSave = () => {
    navigation.navigate(ScreensName.STARTQUESTIONAIRE);
  };
  return (
    <StatusBarWrapper>
      <ScrollView>
        <Image
          source={Images.ADDCHILD}
          style={styles.imageStyle}
          resizeMode="contain"
        />

        <Text style={styles.createText}>Creates Child profile.</Text>

        <Text style={styles.loremText}>
          Lorem Ipsum is simply dummy text of the printing
        </Text>

        <Input
          state={name}
          setState={setName}
          placeholder="Enter your name here"
          icon={<FontAwesome name="user" size={20} color={colors.ebonyClay} />}
        />

        <Input
          state={date}
          setState={setDate}
          placeholder="day/moth/year"
          icon={
            <Ionicons
              name="calendar-outline"
              size={20}
              color={colors.ebonyClay}
            />
          }
        />

        <DropDown
          state={grade}
          setState={setGrade}
          onPress={toggleGradeList}
          isDisplayRelationList={isDisplayGradeList}
          placeholder={"Grade"}
          icon={
            <MaterialIcons name="grade" size={20} color={colors.ebonyClay} />
          }
        />

        {isDisplayGradeList && (
          <DropDownList
            lst={relationships}
            selectedRelation={grade}
            setSelectedRelation={setGrade}
            setDropDownVisible={setIsDisplayGradeList}
          />
        )}

        <DropDown
          state={school}
          setState={setSchool}
          onPress={toggleSchoolList}
          isDisplayRelationList={isDisplaySchoolList}
          placeholder={"School"}
          icon={
            <FontAwesome6
              name="user-graduate"
              size={20}
              color={colors.ebonyClay}
            />
          }
        />

        {isDisplaySchoolList && (
          <DropDownList
            lst={relationships}
            selectedRelation={school}
            setSelectedRelation={setSchool}
            //   setDropDownVisible={setIsDisplaySchoolList}
          />
        )}

        <Button
          title={"Save"}
          onPress={handleSave}
          btnStyle={{
            marginTop:
              isDisplayGradeList || isDisplaySchoolList ? height(2) : height(7),
          }}
        />
      </ScrollView>
    </StatusBarWrapper>
  );
}
