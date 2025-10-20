import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Button, Input, PhotoUploader } from "../../../components";
import AntDesign from "@expo/vector-icons/AntDesign";
import colors from "../../../utils/AppColors";
import Images from "../../../assets/images";
import { fonts } from "../../../utils/fonts";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import StatusBarWrapper from "../../../components/customStatusbar";
import ConnectedModal from "../../../components/conectedModal/connectedModal";
import { errorToastMessage, getStoredValue } from "../../../utils/Methods";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTranslation } from "react-i18next";

const AccountSetupScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [isConnectedModal, setIsConnectedModal] = useState(false);
  const { t } = useTranslation();
  const handlePhotoUpload = () => {
    // open file/image picker
  };

  const handleContinue = async () => {
    const childData = await getStoredValue("childData");

    console.log("Stored Child Id", childData);
    console.log("Code", code);

    if (code) {
      console.log("Code Given", childData);

      if (childData?.id === code) {
        setIsConnectedModal(true);
        setTimeout(() => {
          setIsConnectedModal(false);
          navigation.navigate(ScreensName.MAGICBACKPACK);
        }, 3000);
      } else {
        errorToastMessage("Child Id", "Wrong Child Id");
      }
    } else {
      console.log("Code Not Given");

      errorToastMessage("Filed", "Fields are missing");
    }
  };

  return (
    <StatusBarWrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, }}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1, }}>
          <Image source={Images.ACCOUNTIMAGE} style={styles.illustration} />

          <Text style={styles.title}>{t('account.accountSetup')}</Text>
          <Text style={styles.subtitle}>
            {t('account.enterCode')}
          </Text>


          <Input
            placeholder={t('account.enterUserCode')}
            value={code}
            setState={setCode}
            icon={<AntDesign name="user-add" size={18} color={colors.ebonyClays} />}
          />

          <Input
            placeholder={t('account.enterName')}
            value={name}
            setState={setName}
            icon={<AntDesign name="user" size={18} color={colors.ebonyClays} />}
          />

          <PhotoUploader />

          <Button title={t('account.continue')} onPress={handleContinue} />

          <ConnectedModal
            visible={isConnectedModal}
            onClose={() => setIsConnectedModal(false)}
          />
        </View>
      </KeyboardAwareScrollView>
    </StatusBarWrapper>
  )
};

export default AccountSetupScreen;
