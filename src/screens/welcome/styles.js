import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
  parentView: {
    justifyContent: "space-around",
  },
  imageStyle: {
    marginTop: height(10),
    width: width(80),
    height: height(10),
    resizeMode: 'contain'
    // backgroundColor: "red",
    // marginBottom: height(2),
  },
  kidzText: {
    color: colors.dodgerBlue,
    fontFamily: fonts.bold,
    fontSize: 30,
  },
  growText: {
    color: colors.emperor,
    fontFamily: fonts.medium,
    fontSize: 14,
    // marginBottom: height(10),
  },
});

export default styles;
