
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './styles';
import { Header } from '../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Certification() {
  const handleDownload = () => {
    // Download logic here
    alert('Downloading certificate...');
  };

  const shareOnLinkedIn = () => {
    // Replace with real share URL logic
    Linking.openURL('https://www.linkedin.com/');
  };

  const shareOnEmail = () => {
    Linking.openURL('mailto:?subject=My Certification&body=Check out my certificate!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Certification"} />

      <View style={styles.profileContainer}>
        <Image
          source={require('./../../../assets/images/coachProfile.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileStyle}>
          <Text style={styles.name}>DC alex</Text>
          <Text style={styles.email}>dcalex@mail.com</Text>
        </View>
      </View>
      <View style={styles.certifiedContainer}>
        <View style={styles.iconBox}>
          <Icon name="file-certificate" size={24} color="#007bff" />
        </View>
        <View style={styles.certBox}>
          <View>
            <View style={styles.certifiedstyle}>
              <Text style={styles.certText}>Certified</Text>
              <Icon name="check-decagram" size={20} color="#007BFF" />
            </View>

            <Text style={styles.levelText}>Level 1</Text>

          </View>

        </View>

        <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
          <Text style={styles.downloadText}>Download Certificate</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.badgeLabel}>Badge share options</Text>

      <View style={styles.shareContainer}>
        <TouchableOpacity style={styles.shareBtn} onPress={shareOnLinkedIn}>
          <Icon name="linkedin" size={20} color="#007BFF" />
          <Text style={styles.shareText}>on Linked</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareBtn} onPress={shareOnEmail}>
          <Icon name="email" size={20} color="gray" />
          <Text style={styles.shareText}>on Email</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

