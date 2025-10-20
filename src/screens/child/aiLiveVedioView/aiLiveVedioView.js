import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import VideoPlayer from "../../../components/vedioPlayer/vedioPlayer";
import SuccessModal from "../../../components/successModal/success";
import { useNavigation } from "@react-navigation/native";
import { getStoredValue } from "../../../utils/Methods";
import { useTranslation } from "react-i18next";

export default function AiLiveVedioView() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
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
    <View style={styles.container}>
      <VideoPlayer
        videoSource={"https://www.pexels.com/download/video/2932301/"}
        setModalVisible={setModalVisible}
        fullScreen={true}
      />

      <SuccessModal
        title={t("aiLiveVedio.title")}
        subtitle={t("aiLiveVedio.subtitle", { name: childData?.name })}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        questionOf={"AiLiveVedio"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
