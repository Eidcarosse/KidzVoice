import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
  Image,
  SectionList,
  Alert,
} from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Images from "../../../assets/images";
import { styles } from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";
import { AiCustomHeader } from "../../../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../../utils/AppColors";
import { requestAudioPermissions } from "../../../utils/helper";
import VoiceMessageModal from "../../../components/voice/modal";
import VoiceMessage from "../../../components/voice";
import AudioNote from "../../../components/voice";
import { useNavigation, useRoute } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import { getStoredValue } from "../../../utils/Methods";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { height } from "../../../utils/Dimensions";
import { useTranslation } from "react-i18next";


const Questionnaire = () => {
  const route = useRoute();
  const questionOf = route?.params?.questionOf || "";
  console.log("question of", questionOf);

  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceModalVisible, setIsVoiceModalVisible] = useState(false);

  const [aiTyping, setAiTyping] = useState(false);

  const [childData, setChildData] = useState();
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const questionSets = {
    LiveVedio: [
      t('aiQuestionair.liveVideo.q1'),
      t('aiQuestionair.liveVideo.q2'),
      t('aiQuestionair.liveVideo.q3'),
      t('aiQuestionair.liveVideo.q4'),
      t('aiQuestionair.liveVideo.q5'),
    ],
    Profile: [
      t('aiQuestionair.profile.q1'),
      t('aiQuestionair.profile.q2'),
      t('aiQuestionair.profile.q3'),
      t('aiQuestionair.profile.q4'),
    ],
    Default: [
      t('aiQuestionair.default.q1'),
      t('aiQuestionair.default.q2'),
      t('aiQuestionair.default.q3'),
    ],
  };
  const getChildData = async () => {
    const childDataRes = await getStoredValue("childData");
    console.log("Child Data Response", childDataRes);

    setChildData(childDataRes);
  };

  useEffect(() => {
    getChildData();
    setLoading(false);
  }, []);

  // const dummyQuestions = [
  //     "Who are you?",
  //     "What’s your favorite color?",
  //     // "Where are you from?",
  //     // "What do you like to do in your free time?",
  //     // "Who inspires you the most?",
  //     // "What’s your dream job?",
  //     // "If you could visit anywhere, where would it be?",
  //     // "What’s your favorite movie?",
  //     // "What skill do you want to learn?",
  //     // "What makes you happy?",
  // ];
  const dummyQuestions = questionSets[questionOf] || questionSets.Default;
  const [sections, setSections] = useState([
    { title: dummyQuestions[0], data: [] },
  ]);
  const handleSubmit = () => {
    if (!text.trim()) return;

    const newAnswer = text.trim();
    const nextIndex = currentIndex + 1;

    const updatedSections = [...sections];
    updatedSections[currentIndex] = {
      ...updatedSections[currentIndex],
      data: [newAnswer],
    };
    setAiTyping(true);
    setTimeout(() => {
      setAiTyping(false);
      if (nextIndex < dummyQuestions.length) {
        updatedSections.push({
          title: dummyQuestions[nextIndex],
          data: [],
        });
      }
    }, 1500);

    setSections(updatedSections);
    setCurrentIndex(nextIndex);
    setText("");

    if (nextIndex >= dummyQuestions.length) {
      Alert.alert(
        t('aiQuestionair.alertTitle'),
        t('aiQuestionair.alertMessage'),
        [
          {
            text: t('aiQuestionair.okButton'),
            onPress: () => {
              if (questionOf === "LiveVedio") {
                navigation.navigate(ScreensName.AILIVEEXAMPLE);
              } else {
                navigation.navigate(ScreensName.ChildDashboard);
              }
            },
          },
        ]
      );

      return; // stop here so it doesn’t set index past last question
    }
  };

  //   const handleSendVoiceMessage = (audioUri) => {
  //     if (!audioUri) return;

  //     const nextIndex = currentIndex + 1;

  //     const updatedSections = [...sections];
  //     updatedSections[currentIndex] = {
  //       ...updatedSections[currentIndex],
  //       data: [
  //         ...updatedSections[currentIndex].data,
  //         { type: "voice", uri: audioUri },
  //       ],
  //     };

  //     if (nextIndex < dummyQuestions.length) {
  //       updatedSections.push({
  //         title: dummyQuestions[nextIndex],
  //         data: [],
  //       });
  //     }

  //     setSections(updatedSections);
  //     setCurrentIndex(nextIndex);

  //     if (nextIndex >= dummyQuestions.length) {
  //       alert("✅ All questions completed!");
  //     }
  //   };

  const handleSendVoiceMessage = (audioUri, duration) => {
    console.log("Saving Audio", audioUri, duration); // Your log

    if (!audioUri) return;

    const nextIndex = currentIndex + 1;

    const updatedSections = [...sections];
    updatedSections[currentIndex] = {
      ...updatedSections[currentIndex],
      data: [
        ...updatedSections[currentIndex].data,
        { type: "voice", uri: audioUri, duration: duration || 0 },
      ],
    };

    if (nextIndex < dummyQuestions.length) {
      updatedSections.push({
        title: dummyQuestions[nextIndex],
        data: [],
      });
    }

    console.log("Updated sections:", JSON.stringify(updatedSections, null, 2));
    setSections(updatedSections);
    setCurrentIndex(nextIndex);

    if (nextIndex >= dummyQuestions.length) {
      Alert.alert(
        "✅ All questions completed!",
        "Click OK to go to Live Section.",
        [
          {
            text: "OK",
            onPress: () => {
              if (questionOf === "LiveVedio") {
                navigation.navigate(ScreensName.AILIVEEXAMPLE);
              } else {
                navigation.navigate(ScreensName.ChildDashboard);
              }
            },
          },
        ]
      );
      return;
    }
  };

  const insert = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insert.top || 5, paddingBottom: insert.bottom }]}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={80}
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1, }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: height(3)
          // paddingBottom: height(10)
        }}
        showsVerticalScrollIndicator={false}
      >
        <AiCustomHeader user={{ img: Images.AVATAR, name: childData?.name }} />

        <SectionList
          sections={sections}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={({ section }) => (
            <View style={styles.questionRow}>
              <Image source={Images.AIICON} style={styles.aiImg} />
              <Text style={styles.questionText}>{section.title}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View style={styles.answerBubble}>
              <Image source={Images.AVATAR} style={styles.userImg} />
              {typeof item === "string" ? (
                <Text style={styles.answerText}>{item}</Text>
              ) : item.type === "voice" ? (
                <AudioNote uri={item?.uri} duration={item?.duration} />
              ) : null}
            </View>
          )}
          contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
        />
        <View style={styles.bottomBox}>
          <Image source={Images.AIBLUISHBG} style={{ width: '100%', alignSelf: 'center', ...StyleSheet.absoluteFillObject }} />
          {isTyping ? (
            <View style={styles.inputRow}>
              <TextInput
                style={styles.textInput}
                placeholder={t('aiQuestionair.typeAnswer')}
                value={text}
                onChangeText={setText}
              />
              <TouchableOpacity style={styles.sendBtn} onPress={handleSubmit}>
                <Image source={Images.SEND_ICON} style={styles.sendImg} />
              </TouchableOpacity>
              {/* <TouchableOpacity
                onPress={() =>
                  setSections([{ title: dummyQuestions[0], data: [] }])
                }
              >
                <Ionicons name="close-circle-outline" size={36} color="#555" />
              </TouchableOpacity> */}
            </View>
          ) : (
            <View style={styles.actionRow}>
              <TouchableOpacity onPress={() => setIsTyping(true)}>
                <Ionicons name="text-outline" size={36} color="#555" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.micContainer}
                onPress={async () => {
                  // const hasPermission = await requestAudioPermissions();
                  // if (!hasPermission) return;

                  setIsVoiceModalVisible(true);
                }}
              >
                <Image source={Images.MIC} style={styles.micImg} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  setSections([{ title: dummyQuestions[0], data: [] }])
                }
              >
                <Ionicons name="close-circle-outline" size={36} color="#555" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
      {isVoiceModalVisible && (
        <VoiceMessageModal
          isVisible={isVoiceModalVisible}
          onClose={() => setIsVoiceModalVisible(false)}
          onSend={(audioUri, duration) => {
            handleSendVoiceMessage(audioUri, duration);
            setIsVoiceModalVisible(false);
          }}
        />
      )}
    </View>
  );
};

export default Questionnaire;
