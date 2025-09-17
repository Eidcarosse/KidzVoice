import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import {
  Button,
  ChildHistory,
  CurrentStrugle,
  FamilyContext,
} from "../../../components";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../../utils/AppColors";
import { diagnosesOptions, servicesOptions } from "../../../utils/Data";
import { height } from "../../../utils/Dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";

export default function ParentQuestionaire() {
  const navigation = useNavigation();
  const [childHistory, setChildHistory] = useState("Pending");
  const [currentStrugles, setCurrentStrugles] = useState("Remaining");
  const [familyContext, setFamilyContext] = useState("Remaining");

  const [activeQuetionaire, setActiveQuestionaire] = useState("Child History");

  const [diagnoses, setDiagnoses] = useState([]);
  const [services, setServices] = useState([]);
  const [history, setHistory] = useState("");
  const [report, setReport] = useState();

  const [strugglingArea, setStrugglingArea] = useState([]);
  const [struggleEffect, setStruggleEffect] = useState([]);

  const [maxLiveTime, setMaxLiveTime] = useState([]);
  const [siblings, setSiblings] = useState("");
  const [contactPerson, setContactPerson] = useState("");

  const handleNext = () => {
    console.log("Diagnoses", diagnoses);
    console.log("Services", services);
    console.log("History", history);

    if (activeQuetionaire === "Child History") {
      if (diagnoses && services && history) {
        setChildHistory("Completed");
        setActiveQuestionaire("Current Strugle");
        setCurrentStrugles("Pending");
      }
    } else if (activeQuetionaire === "Current Strugle") {
      if (strugglingArea && struggleEffect) {
        setChildHistory("Completed");

        setCurrentStrugles("Completed");
        setActiveQuestionaire("Family Context");
        setFamilyContext("Pending");
      }
    } else {
      if (maxLiveTime && siblings && contactPerson) {
        setChildHistory("Completed");
        setCurrentStrugles("Completed");
        setFamilyContext("Completed");

        navigation.navigate(ScreensName.GENERATECHILD);
      }
    }
  };

  return (
    <StatusBarWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: height(10) }}
      >
        <View style={styles.progressContainer}>
          <Ionicons
            name={
              childHistory == "Pending"
                ? "radio-button-on"
                : "checkmark-circle-sharp"
            }
            size={25}
            color={
              childHistory === "Remaining" ? colors.boulder : colors.blueRibbon
            }
          />
          <View style={styles.progressLine} />
          <Ionicons
            name={
              currentStrugles == "Remaining"
                ? "ellipse-outline"
                : currentStrugles == "Pending"
                ? "radio-button-on"
                : "checkmark-circle-sharp"
            }
            size={25}
            color={
              currentStrugles === "Remaining"
                ? colors.boulder
                : colors.blueRibbon
            }
          />
          <View style={styles.progressLine} />
          <Ionicons
            name={
              familyContext == "Remaining"
                ? "ellipse-outline"
                : familyContext == "Pending"
                ? "radio-button-on"
                : "checkmark-circle-sharp"
            }
            size={25}
            color={
              familyContext === "Remaining" ? colors.boulder : colors.blueRibbon
            }
          />
        </View>

        <View style={{ flex: 1, marginBottom: height(8) }}>
          {activeQuetionaire === "Child History" && (
            <ChildHistory
              diagnoses={diagnoses}
              setDiagnoses={setDiagnoses}
              services={services}
              setServices={setServices}
              history={history}
              setHistory={setHistory}
              report={report}
              setReport={setReport}
            />
          )}

          {activeQuetionaire === "Current Strugle" && (
            <CurrentStrugle
              strugglingArea={strugglingArea}
              setStrugglingArea={setStrugglingArea}
              struggleEffect={struggleEffect}
              setStruggleEffect={setStruggleEffect}
            />
          )}

          {activeQuetionaire === "Family Context" && (
            <FamilyContext
              maxLiveTime={maxLiveTime}
              setMaxLiveTime={setMaxLiveTime}
              siblings={siblings}
              setSiblings={setSiblings}
              contactPerson={contactPerson}
              setContactPerson={setContactPerson}
            />
          )}
        </View>

        <Button title={"Next"} onPress={handleNext} style={styles.nextBtn} />
      </KeyboardAwareScrollView>
    </StatusBarWrapper>
  );
}
