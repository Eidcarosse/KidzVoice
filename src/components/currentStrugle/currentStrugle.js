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

export default function CurrentStrugle({
  strugglingArea,
  setStrugglingArea,
  struggleEffect,
  setStruggleEffect,
}) {
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
      <Text style={styles.title}>Current Struggles</Text>
      <Text style={styles.subtitle}>
        Purpose: What {childData?.name} is facing right now.
      </Text>

      <Text style={styles.question}>
        1 1 Which areas is {childData?.name} currently struggling with?
      </Text>

      <QuestionOptions
        options={strugglingAreaOptions}
        state={strugglingArea}
        setState={setStrugglingArea}
        multiple={true}
      />

      <Text style={styles.question}>
        2 How often do these struggles affect {childData?.name}’s daily life?
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
