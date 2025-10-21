import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import {
  diagnosesOptions,
  maxLiveTimeOptions,
  servicesOptions,
  siblingsOptions,
} from "../../utils/Data";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import colors from "../../utils/AppColors";
import QuestionOptions from "../questionOptions/questionOptions";
import { getStoredValue } from "../../utils/Methods";
import { useTranslation } from "react-i18next";

export default function FamilyContext({
  maxLiveTime,
  setMaxLiveTime,
  siblings,
  setSiblings,
  contactPerson,
  setContactPerson,
}) {
  const { t } = useTranslation();
  const [childData, setChildData] = useState();
  const [loading, setLoading] = useState(true);

  const getChildData = async () => {
    const childDataRes = await getStoredValue("childData");
    console.log("Child Data Response", childDataRes);

    setChildData(childDataRes);
  };

  useEffect(() => {
    getChildData();
    setLoading(false);
  }, []);
  return (
    <View style={styles.parentView}>
      <Text style={styles.title}>{t(`familyContext.familyContext`)}</Text>
      <Text style={styles.subtitle}>{t(`familyContext.purpose`)}</Text>

      <Text style={styles.question}>
        {t(`familyContext.question1p1`)} {childData?.name}{" "}
        {t(`familyContext.question1p2`)}
      </Text>

      <QuestionOptions
        options={maxLiveTimeOptions}
        state={maxLiveTime}
        setState={setMaxLiveTime}
        multiple={true}
      />

      <Text style={styles.question}>
        {t(`familyContext.question2p1`)} {childData?.name}{" "}
        {t(`familyContext.question2p2`)}
      </Text>

      <QuestionOptions
        options={siblingsOptions}
        state={siblings}
        setState={setSiblings}
        multiple={false}
      />

      <Text style={styles.question}>
        {t(`familyContext.question3p1`)} {childData?.name}’s primary
        {t(`familyContext.question3p2`)}
      </Text>
      <TextInput
        style={styles.textArea}
        placeholder=""
        multiline
        numberOfLines={4}
        value={contactPerson}
        onChangeText={setContactPerson}
      />
    </View>
  );
}
