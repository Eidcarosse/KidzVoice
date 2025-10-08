import { View, Text, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";
import Images from "../../../assets/images";
import { Button, DropDown, DropDownList, Input } from "../../../components";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import colors from "../../../utils/AppColors";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import { gradesList, relationships, schoolsList } from "../../../utils/Data";
import { height } from "../../../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import { User, Calendar, GraduationCap, Award } from "lucide-react-native";
import { storeValue } from "../../../utils/Methods";

export default function CreateChildProfile() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [grade, setGrade] = useState("");
  const [isDisplayGradeList, setIsDisplayGradeList] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);



  const [school, setSchool] = useState("");
  const [isDisplaySchoolList, setIsDisplaySchoolList] = useState(false);

  const toggleGradeList = () => {
    setIsDisplayGradeList(!isDisplayGradeList);
  };

  const toggleSchoolList = () => {
    setIsDisplaySchoolList(!isDisplaySchoolList);
  };

  const handleSave = async () => {
    console.log("Child Name", name);
    console.log("Date of birth", date);
    console.log("Grade", grade);
    console.log("School", school);

    const childData = {
      name: name,
      dob: date,
      grade: grade,
      school: school,
    };

    console.log("Child Data", childData);

    const res = await storeValue("childData", childData);

    navigation.navigate(ScreensName.STARTQUESTIONAIRE);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    const formattedDate = selectedDate.toLocaleDateString("en-GB"); // DD/MM/YYYY format
    setDate(formattedDate);
    hideDatePicker();
  };
  return (
    <StatusBarWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      ></KeyboardAvoidingView>
      <ScrollView>
        <Image
          source={Images.ADDCHILD}
          style={styles.imageStyle}
          resizeMode="contain"
        />

        <Text style={styles.createText}>Creates Child profile.</Text>

        <Text style={styles.loremText}>
          Enter your child’s basic details to create their profile.
        </Text>


        <Input
          state={name}
          setState={setName}
          placeholder="Enter your name here"
          icon={<User size={20} color={colors.ebonyClay} />}
        />

        <TouchableOpacity onPress={showDatePicker}>
          <Input
            state={date}
            setState={showDatePicker}
            placeholder="day/month/year"
            editable={false}
            icon={<Calendar size={20} color={colors.ebonyClay} />}
          />
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <DropDown
          state={grade}
          setState={setGrade}
          onPress={toggleGradeList}
          isDisplayRelationList={isDisplayGradeList}
          placeholder={"Grade"}
          icon={<Award size={20} color={colors.ebonyClay} />}
        />

        {isDisplayGradeList && (
          <DropDownList
            lst={gradesList}
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
          icon={<GraduationCap size={20} color={colors.ebonyClay} />}
        />

        {isDisplaySchoolList && (
          <DropDownList
            lst={schoolsList}
            selectedRelation={school}
            setSelectedRelation={setSchool}
            setDropDownVisible={setIsDisplaySchoolList}
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
