import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { fontSizes, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/fonts';

const CustomHeader = ({
  title,
  titleColor = '#000',
  isBack = true,
  onGoBack,
  rightIcon,
  onPressRightIcon,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {/* Left Icon */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.leftIcon}
        onPress={() => (isBack ? onGoBack?.() ?? navigation.goBack() : null)}
        hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
      >
        <AntDesign name="left" size={20} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: titleColor }]} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {/* Right Icon */}
      {rightIcon ? (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.rightIcon}
          onPress={onPressRightIcon}
          hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
        >
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.rightIconPlaceholder} />
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: width(4),
    marginBottom: width(2),
  },
  leftIcon: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
    textAlign: 'center',
  },
  rightIcon: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  rightIconPlaceholder: {
    width: 36,
  },
});
