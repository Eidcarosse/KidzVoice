import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import { fonts } from "../../../utils/fonts";
import colors from "../../../utils/AppColors";

const styles = StyleSheet.create({
  imageStyle: {
    width: width(85),
    height: height(20),
    alignSelf: "center",
    marginTop: height(5),
    marginBottom: height(3),
  },
  basicText: {
    fontSize: 24,
    fontFamily: fonts.medium,
    color: colors.mineShaft,
    textAlign: "center",
    marginBottom: height(1),
  },
  loremText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.boulder,
    textAlign: "center",
    marginBottom: height(6),
  },
});

export default styles;
