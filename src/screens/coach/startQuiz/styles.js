import { StyleSheet } from "react-native";
import colors from "../../../utils/AppColors";
import { fonts } from "../../../utils/fonts";
import { height, width } from "../../../utils/Dimensions";

const styles = StyleSheet.create({
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    marginTop: height(5),
    marginBottom: height(2),
  },
  readyText: {
    textAlign: "center",
    color: colors.mineShaft,
    fontSize: 24,
    fontFamily: fonts.medium,
  },
  okayText: {
    textAlign: "center",
    color: colors.mineShaft,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  startBtn: {
    marginTop: height(15),
  },
});

export default styles;
