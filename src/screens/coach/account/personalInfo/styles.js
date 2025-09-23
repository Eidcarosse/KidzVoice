import { StyleSheet } from "react-native";
import { fonts } from "../../../../utils/fonts";
import colors from "../../../../utils/AppColors";
import { height } from "../../../../utils/Dimensions";

const styles = StyleSheet.create({
  personalText: {
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
  nextButton: {
    marginTop: height(9),
  },
});

export default styles;
