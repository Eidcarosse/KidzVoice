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

export default function Welcome() {
  const navigation = useNavigation();
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
          source={Images.WELCOMEIMAGE}
          style={styles.imageStyle}
          resizeMode="contain"
        />

        <Text style={styles.kidzText}>KidzVoice</Text>

        <Text style={styles.growText}>Grow Smarter, Kinder, Happier.</Text>
      </View>

      <Button
        title="Get Started"
        onPress={() => navigation.navigate(ScreensName.SIGNIN)}
      />
    </StatusBarWrapper>
  );
}
