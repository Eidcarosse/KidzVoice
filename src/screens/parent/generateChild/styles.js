import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import { fonts } from "../../../utils/fonts";
import colors from "../../../utils/AppColors";

const styles = StyleSheet.create({
  imageStyle: {
    width: width(80),
    height: height(23),
    alignSelf: "center",
    marginTop: height(8),
    marginBottom: height(5),
  },
  yourText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.mineShaft,
    marginHorizontal: 16,
    paddingHorizontal: width(10),
    marginBottom: height(3),
  },
  secureText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.mineShaft,
    marginHorizontal: 16,
    marginTop: height(2),
    marginBottom: height(1),
  },
  generateBtnStyle: {
    marginTop: height(15),
  },
});

export default styles;
