import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";
import { height } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  parentView: {
    marginHorizontal: 16,
    marginBottom: height(5),
  },
  title: {
    fontSize: 18,
    color: colors.mineShaft,
    fontFamily: fonts.medium,
  },
  subtitle: {
    fontSize: 12,
    color: colors.boulder,
    marginBottom: 20,
    fontFamily: fonts.regular,
  },
  question: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    // paddingVertical: 5,
    marginVertical: 2,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.black,
  },
});

export default styles;
