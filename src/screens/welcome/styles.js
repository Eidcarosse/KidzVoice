import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
  imageStyle: {
    width: width(85),
    height: height(20),
    // backgroundColor: "red",
    marginBottom: height(2),
  },
  kidzText: {
    color: colors.dodgerBlue,
    fontFamily: fonts.bold,
    fontSize: 30,
  },
  growText: {
    color: colors.emperor,
    fontFamily: fonts.medium,
    fontSize: 16,
  },
});

export default styles;
