import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import { fonts } from "../../../utils/fonts";
import colors from "../../../utils/AppColors";

const styles = StyleSheet.create({
  imageStyle: {
    width: width(85),
    height: height(25),
    alignSelf: "center",
    marginTop: height(5),
  },
  createText: {
    fontSize: 24,
    fontFamily: fonts.medium,
    textAlign: "center",
    marginTop: height(3),
    color: colors.mineShaft,
  },
  loremText: {
    color: colors.boulder,
    textAlign: "center",
    marginBottom: height(3),
  },
});

export default styles;
