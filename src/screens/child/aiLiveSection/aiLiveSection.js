import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeader from "../../../components/customHeader/header";
import { styles } from "./styles";
import Images from "../../../assets/images";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FeelingResult from "./component/feelingResult";
import { useNavigation } from "@react-navigation/native";
import SuccessModal from "../../../components/successModal/success";
import ScreensName from "../../../routes/routes";
import { getStoredValue } from "../../../utils/Methods";
import { useTranslation } from "react-i18next";

export default function AiLiveSection() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [childData, setChildData] = useState();
  const [loading, setLoading] = useState(true);

  const getChildData = async () => {
    const childDataRes = await getStoredValue("childData");
    setChildData(childDataRes);
  };

  useEffect(() => {
    getChildData();
    setLoading(false);
  }, []);

  const feelings = [
    {
      emoji: "😊",
      label: t("aiLiveSection.feelings.happy.label"),
      message: t("aiLiveSection.feelings.happy.message"),
      img: Images.HAPPYIMG,
    },
    {
      emoji: "😢",
      label: t("aiLiveSection.feelings.sad.label"),
      message: t("aiLiveSection.feelings.sad.message"),
      img: Images.SADIMG,
    },
    {
      emoji: "😐",
      label: t("aiLiveSection.feelings.okay.label"),
      message: t("aiLiveSection.feelings.okay.message"),
      img: Images.OKAYIMG,
    },
    {
      emoji: "😡",
      label: t("aiLiveSection.feelings.angry.label"),
      message: t("aiLiveSection.feelings.angry.message"),
      img: Images.ANGRYIMG,
    },
  ];

  const selected = feelings.find((f) => f.label === selectedFeeling);

  const handleBack = () => {
    if (selectedFeeling) {
      setSelectedFeeling(null);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top || 5 }]}>
      <CustomHeader
        isBack={true}
        onGoBack={handleBack}
        title={t("aiLiveSection.title")}
      />

      {!selected ? (
        <>
          <Image source={Images.AIICON} style={styles.img} />

          <View style={styles.textBox}>
            <Text style={styles.questionText}>
              {t("aiLiveSection.question", { name: childData?.name })}
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            {feelings.map((item, index) => {
              const isActive = selectedFeeling === item.label;
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionBox,
                    isActive && { backgroundColor: "#007BFF" },
                  ]}
                  onPress={() => setSelectedFeeling(item.label)}
                >
                  <Text
                    style={[styles.optionEmoji, isActive && { color: "#fff" }]}
                  >
                    {item.emoji}
                  </Text>
                  <Text
                    style={[styles.optionText, isActive && { color: "#fff" }]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </>
      ) : (
        <FeelingResult
          isBtn={true}
          onPress={() => navigation.navigate(ScreensName.AILIVEVEDIOSECTION)}
          image={Images.AIICON}
          text={selected.message}
        />
      )}

      <SuccessModal
        title={t("aiLiveSection.successTitle", { name: childData?.name })}
        subtitle={t("aiLiveSection.successSubtitle")}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        questionOf={"FeelingResult"}
      />
    </View>
  );
}
