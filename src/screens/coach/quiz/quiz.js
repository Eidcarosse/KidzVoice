import { View, Text, FlatList, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";
import { tasks } from "../../../utils/Data";
import { Button, Header, QuestionCard, TaskCard } from "../../../components";
import Images from "../../../assets/images";

const options = [
  { id: "A", text: "Have no meaning" },
  { id: "B", text: "Have no meaning" },
  { id: "C", text: "Are random" },
  { id: "D", text: "Should be ignored" },
];

export default function Quiz() {
  const [answer, setAnswer] = useState();
  return (
    <StatusBarWrapper scrollType={"scroll"}>
      <Header title={"Quiz"} />
      <View style={styles.imageTitleView}>
        <Image source={Images.COACHAVATAR} style={styles.imageStyle} />
        <View style={styles.titleView}>
          <Text style={styles.moduleText}>Module 1</Text>
          <Text style={styles.moduleText}>Safeguarding</Text>
        </View>
      </View>

      <QuestionCard
        question={"1. Emotions are called hidden messages because they:"}
        optionList={options}
        answer={answer}
        setAnswer={setAnswer}
      />

      <View style={styles.lineView} />

      <Text style={styles.relatedText}>Related content</Text>

      <FlatList
        data={tasks.slice(0, 2)}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={({ index }) => index?.toString()}
      />

      <View style={styles.bottonsView}>
        <Button
          title={"Skip"}
          btnStyle={styles.skipButton}
          textStyle={styles.skipBtntext}
        />
        <Button title={"Submit"} btnStyle={styles.submitButton} />
      </View>

      <Text style={styles.reportText}>Report a problem</Text>
    </StatusBarWrapper>
  );
}
