import { View, Text, Platform } from "react-native";
import React, { useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import {
  Button,
  DropDown,
  DropDownList,
  Header,
  Input,
} from "../../../components";
import styles from "./styles";
import { currencyList, relationships } from "../../../utils/Data";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTranslation } from "react-i18next";

export default function PayoutSetup() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [accountHolder, setAccountHolder] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [isCurrencyListDisplay, setIsCurrencyListDisplay] = useState(false);

  const toggleCurrencyListList = () => {
    setIsCurrencyListDisplay(!isCurrencyListDisplay);
  };

  const handleSave = () => {
    navigation.navigate(ScreensName.TRAINING);
  };
  return (
    <StatusBarWrapper>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={80}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title={t(`payOutSetUp.payOutSetUp`)} />

        <Text style={styles.labelText}>
          {t(`payOutSetUp.accountHolderName`)}
        </Text>
        <Input
          placeholder={t(`payOutSetUp.enterHolderName`)}
          state={accountHolder}
          setState={setAccountHolder}
        />

        <Text style={styles.labelText}>{t(`payOutSetUp.bankName`)}</Text>
        <Input
          placeholder={t(`payOutSetUp.enterBankName`)}
          state={bankName}
          setState={setBankName}
        />

        <Text style={styles.labelText}>{t(`payOutSetUp.accountNumber`)}</Text>
        <Input
          placeholder={t(`payOutSetUp.enterAccountNumber`)}
          state={accountNum}
          setState={setAccountNum}
        />

        <Text style={styles.labelText}>{t(`payOutSetUp.sortCode`)}</Text>
        <Input
          placeholder={t(`payOutSetUp.enterSortCode`)}
          state={shortCode}
          setState={setShortCode}
        />

        <Text style={styles.labelText}>{t(`payOutSetUp.currency`)}</Text>
        {/* <Input placeholder={"Currency"} state={currency} setState={setCurrency} /> */}

        <DropDown
          state={currency}
          setState={setCurrency}
          onPress={toggleCurrencyListList}
          isDisplayRelationList={isCurrencyListDisplay}
          placeholder={t(`payOutSetUp.currency`)}
          // icon={<Users size={20} color={colors.ebonyClay} />}
        />

        {isCurrencyListDisplay && (
          <DropDownList
            lst={currencyList}
            selectedRelation={currency}
            setSelectedRelation={setCurrency}
            setDropDownVisible={setIsCurrencyListDisplay}
          />
        )}

        <Button
          title={t(`payOutSetUp.save`)}
          btnStyle={styles.saveBtn}
          onPress={handleSave}
        />
      </KeyboardAwareScrollView>
    </StatusBarWrapper>
  );
}
