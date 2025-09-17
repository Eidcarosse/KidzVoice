import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fontSizes, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/fonts';
import AntDesign from '@expo/vector-icons/AntDesign';
const CustomHeader = ({
  title,
  titleColor,
  rightIcon,
  onPressRightIcon,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.iconButton}
        onPress={() => navigation.goBack()}
        hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
      >
        <AntDesign name="left" size={20} color="black" />
      </TouchableOpacity>

      <View style={styles.titleView}>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      </View>

      {/* {rightIcon ? (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.iconButton}
          onPress={onPressRightIcon}
          hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
        >
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.iconButton} />
      )} */}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width(2),
    marginHorizontal: width(2),
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  titleView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: 'red',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: fontSizes.xl,
    fontFamily: fonts.bold,
  },
});
