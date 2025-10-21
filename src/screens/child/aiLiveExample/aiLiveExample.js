import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeader from "../../../components/customHeader/header";
import Images from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FeelingResult from "../aiLiveSection/component/feelingResult";
import ScreensName from "../../../routes/routes";
import { styles } from "./styles";
import SuccessModal from "../../../components/successModal/success";
import { getStoredValue } from "../../../utils/Methods";
import { useTranslation } from "react-i18next";

export default function AiLiveExample() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const question = "2 + 5";
  const correctAnswer = 7;
  const options = [5, 7, 8, -7];

  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [modalVisible, setModalVisible] = useState(true);

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

  const handleSelect = (option) => {
    setSelected(option);
    setIsCorrect(option === correctAnswer);
  };

  const handleBack = () => {
    navigation.navigate(ScreensName.MAGICBACKPACK);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top || 5 }]}>
      <CustomHeader
        isBack={true}
        onGoBack={handleBack}
        title={t("aiLiveExample.header")}
      />

      <FeelingResult
        image={Images.AIICON}
        text={t("aiLiveExample.description")}
      />

      <View style={styles.questionContainer}>
        <Text style={styles.question}>{question}</Text>
        <Text style={styles.equalStyle}>=</Text>
        <View style={styles.answerBox}>
          <Text style={styles.answerText}>{selected}</Text>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selected === option &&
              option === correctAnswer &&
              styles.correctOption,
              selected === option &&
              option !== correctAnswer &&
              styles.incorrectOption,
            ]}
            onPress={() => handleSelect(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {isCorrect !== null && (
        <Text style={styles.resultText}>
          {isCorrect
            ? t("aiLiveExample.correct")
            : t("aiLiveExample.incorrect")}
        </Text>
      )}

      {isCorrect && (
        <SuccessModal
          title={t("aiLiveExample.modalTitle", { name: childData?.name })}
          subtitle={t("aiLiveExample.modalSubtitle")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          questionOf={"AiExample"}
        />
      )}
    </View>
  );
}
