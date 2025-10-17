import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import QuestionOptions from "../questionOptions/questionOptions";
import styles from "./styles";
import {
  diagnosesOptions,
  struggleEffectOptions,
  strugglingAreaOptions,
} from "../../utils/Data";
import { getStoredValue } from "../../utils/Methods";
import { useTranslation } from "react-i18next";

export default function CurrentStrugle({
  strugglingArea,
  setStrugglingArea,
  struggleEffect,
  setStruggleEffect,
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
      <Text style={styles.title}>{t(`currentStrugle.currentStrugle`)}</Text>
      <Text style={styles.subtitle}>
        {t(`currentStrugle.purpose`)} {childData?.name}{" "}
        {t(`currentStrugle.facing`)}
      </Text>

      <Text style={styles.question}>
        {t(`currentStrugle.question1p1`)} {childData?.name}{" "}
        {t(`currentStrugle.question1p2`)}
        with?
      </Text>

      <QuestionOptions
        options={strugglingAreaOptions}
        state={strugglingArea}
        setState={setStrugglingArea}
        multiple={true}
      />

      <Text style={styles.question}>
        {t(`currentStrugle.question2p1`)} {childData?.name}’s{" "}
        {t(`currentStrugle.question2p2`)}
      </Text>

      <QuestionOptions
        options={struggleEffectOptions}
        state={struggleEffect}
        setState={setStruggleEffect}
        multiple={true}
      />
    </View>
  );
}
