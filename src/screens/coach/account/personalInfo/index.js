import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "../../../../components";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Calendar, Phone } from "lucide-react-native";
import colors from "../../../../utils/AppColors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useTranslation } from "react-i18next";
export default function PersonalInfo({
  name,
  setName,
  dob,
  setDob,
  contact,
  setContact,
  onPress,
}) {
  const { t } = useTranslation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    const formattedDate = selectedDate.toLocaleDateString("en-GB");
    setDob(formattedDate);
    hideDatePicker();
  };
  const prefix = "+41 ";

  const handlePhoneChange = (text) => {
    const cleanText = text.replace(prefix, "");
    const onlyNumbers = cleanText.replace(/[^0-9]/g, "");
    setContact(onlyNumbers);
  };

  const displayedPhone = prefix + contact;
  return (
    // <KeyboardAwareScrollView>

    <View>
      <Text style={styles.personalText}>
        {t(`coachPersonalInfo.personalInfo`)}
      </Text>

      <Text style={styles.titleText}>{t(`coachPersonalInfo.name`)}</Text>

      <Input
        placeholder={t(`coachPersonalInfo.yourName`)}
        state={name}
        setState={setName}
      />

      <Text style={styles.titleText}>{t(`coachPersonalInfo.DOB`)}</Text>

      {/* <Input
        placeholder={"Acceptance and Commitment Therapy"}
        state={dob}
        setState={setDob}
      /> */}
      <TouchableOpacity onPress={showDatePicker}>
        <Input
          state={dob}
          setState={showDatePicker}
          placeholder={t(`coachPersonalInfo.enterDOB`)}
          editable={false}
          icon={<Calendar size={20} color={colors.ebonyClay} />}
        />
      </TouchableOpacity>
      <Text style={styles.titleText}>{t(`coachPersonalInfo.contact`)}</Text>

      <View style={styles.textContainer}>
        <Phone size={20} color={colors.ebonyClay} style={{ marginRight: 8 }} />
        <TextInput
          style={styles.textStyle}
          value={displayedPhone}
          onChangeText={handlePhoneChange}
          placeholder={t(`coachPersonalInfo.contactPlaceholder`)}
          keyboardType="numeric"
          maxLength={12}
          selection={{
            start: displayedPhone.length,
            end: displayedPhone.length,
          }}
        />
      </View>

      <Button
        title={t(`coachPersonalInfo.next`)}
        onPress={onPress}
        btnStyle={styles.nextButton}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
    // </KeyboardAwareScrollView>
  );
}
