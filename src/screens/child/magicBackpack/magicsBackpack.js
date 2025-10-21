import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import StatusBarWrapper from "../../../components/customStatusbar";
import { height } from "../../../utils/Dimensions";
import { styles } from "./styles";
import Images from "../../../assets/images";
import { Button } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import { getStoredValue } from "../../../utils/Methods";
import { useTranslation } from "react-i18next";

const MagicBackpackScreen = () => {
  const navigation = useNavigation();

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
  const { t } = useTranslation()
  const handleContinue = () => {
    navigation.navigate(ScreensName.QUESTIONAIRE);
    // navigation.navigate(ScreensName.AILIVESECTION)
    // navigation.navigate(ScreensName.AILIVEVEDIOSECTION)
    // navigation.navigate(ScreensName.AILIVEEXAMPLE)
  };
  return (
    <StatusBarWrapper >
      <View style={styles.container}>
        <Text style={styles.title}>{t('magicBackpack.forChild', { name: childData?.name })}</Text>

        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            {t('magicBackpack.description')}
          </Text>
        </View>

        <View style={styles.imgContainer}>
          <Image source={Images.AIICON} style={styles.img} />
        </View>

        <Button
          onPress={handleContinue}
          title={t('magicBackpack.title')}
          btnStyle={styles.btnStyle}
        />
      </View>
    </StatusBarWrapper>
  );
};

export default MagicBackpackScreen;
