import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import colors from "../../../utils/AppColors";
import { fonts } from "../../../utils/fonts";

const styles = StyleSheet.create({
  imageTitleView: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height(3),
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  titleView: {
    marginLeft: 15,
  },
  moduleText: {
    color: colors.mineShaft,
    fontSize: 24,
    fontFamily: fonts.medium,
  },
  safeGaurdingText: {},
  questionText: {
    color: colors.mineShaft,
    fontSize: 16,
    fontFamily: fonts.regular,
    marginHorizontal: 16,
  },
  optionsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
  optionText: {
    color: colors.emperor,
    fontSize: 14,
    fontFamily: fonts.regular,
  },

  lineView: {
    width: width(100),
    height: 1,
    backgroundColor: colors.alto,
    marginVertical: height(2),
  },
  relatedText: {
    marginHorizontal: 16,
    color: colors.emperor,
    fontSize: 16,
    fontFamily: fonts.regular,
    marginBottom: height(1),
  },
  bottonsView: {
    flexDirection: "row",
    marginHorizontal: 16,
  },
  skipButton: {
    backgroundColor: colors.alto,
    borderWidth: 1,
    borderColor: colors.blueRibbon,
    width: "47%",
    marginHorizontal: 10,
    paddingVertical: height(1),
  },
  skipBtntext: {
    color: colors.zumthor,
  },
  submitButton: {
    width: "43%",
    marginHorizontal: 10,
    paddingVertical: height(1),
  },
  reportText: {
    color: colors.emperor,
    marginHorizontal: 20,
    textAlign: "right",
    marginBottom: height(15),
  },
});

export default styles;
