import { View, Text, ScrollView } from "react-native";
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

export default function PayoutSetup() {
  const navigation = useNavigation();
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
      <ScrollView>
        <Header title={"Payout Setup"} />

        <Text style={styles.labelText}>Account Holder Name</Text>
        <Input
          placeholder={"Enter Account Holder Name"}
          state={accountHolder}
          setState={setAccountHolder}
        />

        <Text style={styles.labelText}>Bank Name</Text>
        <Input
          placeholder={"Enter Bank Name"}
          state={bankName}
          setState={setBankName}
        />

        <Text style={styles.labelText}>Account Number / IBAN</Text>
        <Input
          placeholder={"Enter Account Number / IBAN"}
          state={accountNum}
          setState={setAccountNum}
        />

        <Text style={styles.labelText}>Sort Code / SWIFT Code</Text>
        <Input
          placeholder={"Enter Sort Code / SWIFT Code"}
          state={shortCode}
          setState={setShortCode}
        />

        <Text style={styles.labelText}>Currency</Text>
        {/* <Input placeholder={"Currency"} state={currency} setState={setCurrency} /> */}

        <DropDown
          state={currency}
          setState={setCurrency}
          onPress={toggleCurrencyListList}
          isDisplayRelationList={isCurrencyListDisplay}
          placeholder={"Relationship with child"}
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

        <Button title={"Save"} btnStyle={styles.saveBtn} onPress={handleSave} />
      </ScrollView>
    </StatusBarWrapper>
  );
}
