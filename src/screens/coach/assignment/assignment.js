import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You can change the icon set based on your setup
import styles from './styles';
import { Header, UploadDocument } from '../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ScreensName from '../../../routes/routes';

const AssignmentScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Assigment"} />

      <View style={styles.section}>
        <Text style={styles.label}>Written Exam</Text>
        <View style={styles.inputBox}>
          <TextInput
            multiline
            style={styles.input}
            placeholder="Usman khan"
            placeholderTextColor="#ccc"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Practical Exam</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Schedule Live Observed Session</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.labelStyle}>Portfolio Submission</Text>
      </View>
      <UploadDocument
        viewStyle={styles.uploadBox}
        textStyle={styles.uploadText}
        title={"Upload case reports"}
      />

      <Text style={styles.reviewText}>Your submitted assignment is under review</Text>

      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate(ScreensName.CERTIFICATION)}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


export default AssignmentScreen;
