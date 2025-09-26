import { StyleSheet } from "react-native";
import { fonts } from "../../../../utils/fonts";
import colors from "../../../../utils/AppColors";
import { height, width } from "../../../../utils/Dimensions";

const styles = StyleSheet.create({
  parentView: {
    // marginHorizontal: 16,
  },
  educationalText: {
    fontFamily: fonts.regular,
    color: colors.mineShaft,
    fontSize: 24,
    marginHorizontal: 16,
    marginTop: height(3),
    marginBottom: height(2),
  },
  titleText: {
    fontFamily: fonts.regular,
    color: colors.mineShaft,
    fontSize: 16,
    marginHorizontal: 16,
  },
  lineView: {
    width: width(100),
    height: 1,
    backgroundColor: colors.alto,
  },
  uploadIdView: {
    borderColor: colors.alto,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
  },
  uploadIdText: {
    color: colors.black,
  },
  nextButton: {
    marginVertical: height(9),
  },
});

export default styles;
