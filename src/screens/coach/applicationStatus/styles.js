import { StyleSheet } from "react-native";
import { fonts } from "../../../utils/fonts";
import { height, width } from "../../../utils/Dimensions";
import colors from "../../../utils/AppColors";

const styles = StyleSheet.create({
  verificationText: {
    fontFamily: fonts.regular,
    fontSize: 20,
    marginTop: height(5),
    marginHorizontal: 16,
    marginBottom: height(2),
  },
  lineView: {
    width: width(100),
    height: 1,
    backgroundColor: colors.alto,
    marginTop: height(2),
  },
  estimatedText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    marginHorizontal: 16,
    marginVertical: height(3),
  },
  helpText: {
    color: colors.denim,
    fontSize: 16,
    fontFamily: fonts.regular,
    marginHorizontal: 16,
  },
  youText: {
    marginHorizontal: 16,
    fontSize: 12,
    color: colors.boulder,
  },
  getBtn: {
    backgroundColor: colors.lightBlueRibbon,
    marginBottom: height(7),
  },
});

export default styles;
