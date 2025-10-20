import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You can change the icon set based on your setup
import styles from './styles';
import { Button, Header, UploadDocument } from '../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ScreensName from '../../../routes/routes';
import StatusBarWrapper from '../../../components/customStatusbar';
import { useTranslation } from 'react-i18next';

const AssignmentScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  return (
    <StatusBarWrapper>
      <Header title={t("assignment.title")} />

      <View style={styles.section}>
        <Text style={styles.label}>{t("assignment.writtenExam")}</Text>
        <View style={styles.inputBox}>
          <TextInput
            multiline
            style={styles.input}
            placeholder={t("assignment.placeholderName")}
            placeholderTextColor="#ccc"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>{t("assignment.practicalExam")}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            {t("assignment.scheduleLiveSession")}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.labelStyle}>{t("assignment.portfolioSubmission")}</Text>
      </View>

      <UploadDocument
        viewStyle={styles.uploadBox}
        textStyle={styles.uploadText}
        title={t("assignment.uploadCaseReports")}
      />

      <Text style={styles.reviewText}>
        {t("assignment.underReview")}
      </Text>

      <Button
        title={t("parentQuestionaire.next")}
        onPress={() => navigation.navigate(ScreensName.CERTIFICATION)}
      />
    </StatusBarWrapper>
  );
}


export default AssignmentScreen;
