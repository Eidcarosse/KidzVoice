import { View, Text, FlatList, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";
import { tasks } from "../../../utils/Data";
import { Button, Header, QuestionCard, TaskCard } from "../../../components";
import Images from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import { useTranslation } from "react-i18next";

const options = [
  { id: "A", text: "Have no meaning" },
  { id: "B", text: "Have no meaning" },
  { id: "C", text: "Are random" },
  { id: "D", text: "Should be ignored" },
];

export default function Quiz() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [answer, setAnswer] = useState();
  return (
    <StatusBarWrapper scrollType={"scroll"}>
      <Header title={t(`quiz.quiz`)} />
      <View style={styles.imageTitleView}>
        <Image source={Images.COACHAVATAR} style={styles.imageStyle} />
        <View style={styles.titleView}>
          <Text style={styles.moduleText}>{t(`quiz.module1`)}</Text>
          <Text style={styles.moduleText}>{t(`quiz.psychology`)}</Text>
        </View>
      </View>

      <QuestionCard
        question={t(`quiz.question`)}
        optionList={options}
        answer={answer}
        setAnswer={setAnswer}
      />

      <View style={styles.lineView} />

      <Text style={styles.relatedText}>{t(`quiz.relatedText`)}</Text>

      <FlatList
        data={tasks.slice(0, 2)}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={({ index }) => index?.toString()}
      />

      <View style={styles.bottonsView}>
        <Button
          title={t(`quiz.skip`)}
          btnStyle={styles.skipButton}
          textStyle={styles.skipBtntext}
          onPress={() => navigation.goBack()}
        />
        <Button
          title={t(`quiz.submit`)}
          btnStyle={styles.submitButton}
          onPress={() => navigation.navigate(ScreensName.CERTIFICATION)}
        />
      </View>

      <Text style={styles.reportText}>{t(`quiz.reportText`)}</Text>
    </StatusBarWrapper>
  );
}
