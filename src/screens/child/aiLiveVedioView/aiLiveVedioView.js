import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import VideoPlayer from "../../../components/vedioPlayer/vedioPlayer";
import SuccessModal from "../../../components/successModal/success";
import { useNavigation } from "@react-navigation/native";
import { getStoredValue } from "../../../utils/Methods";

export default function AiLiveVedioView() {
  const navigation = useNavigation();
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
        videoSource={"https://www.w3schools.com/html/mov_bbb.mp4"}
        setModalVisible={setModalVisible}
        fullScreen={true}
      />

      <SuccessModal
        title={"Great job"}
        subtitle={`${childData?.name}! You just trained your focus, just like a football player before a big match.`}
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
