import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";
import { height } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  parentView: {
    marginHorizontal: 16,
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
  textArea: {
    borderWidth: 1,
    borderColor: colors.alto,
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    textAlignVertical: "top",
    minHeight: height(15),
  },
  uploadBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.blueRibbon,
    borderRadius: 10,
    padding: 12,
    marginVertical: 20,
    minHeight: height(10),
  },
  uploadText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.blueRibbon,
  },
});

export default styles;
