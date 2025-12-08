import { View, Text, Image } from "react-native";
import React from "react";
import commonStyles from "../../utils/commonStyles";
import { fonts } from "../../utils/fonts";
import { Button, Input } from "../../components";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import colors from "../../utils/AppColors";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../routes/routes";
import StatusBarWrapper from "../../components/customStatusbar";
import Images from "../../assets/images";
import styles from "./styles";
import { height } from "../../utils/Dimensions";
import { useTranslation } from "react-i18next";

export default function Welcome() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <StatusBarWrapper>
      <View
        style={{
          alignItems: "center",
          height: height(80),
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        <Image
          source={Images.WELCOMEIMAGE1}
          style={styles.imageStyle}
          resizeMode="contain"
        />

        {/* <Text style={styles.kidzText}>{t(`welCome.title`)}</Text> */}

        <Text style={styles.growText}>{t(`welCome.description`)}</Text>
      </View>

      <Button
        title={t(`welCome.getStarted`)}
        onPress={() => navigation.navigate(ScreensName.SIGNIN)}
      />
    </StatusBarWrapper>
  );
}
