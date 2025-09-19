import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import { fonts } from "../../../utils/fonts";
import colors from "../../../utils/AppColors";

const styles = StyleSheet.create({
  imageStyle: {
    width: width(80),
    height: height(20),
    alignSelf: "center",
    marginTop: height(5),
  },
  startText: {
    fontSize: 24,
    fontFamily: fonts.medium,
    textAlign: "center",
    marginTop: height(4),
    color: colors.mineShaft,
  },
  hisText: {
    color: colors.boulder,
    textAlign: "center",
    marginBottom: height(14),
    fontFamily: fonts.regular,
    marginHorizontal: 14,
  },
});

export default styles;
