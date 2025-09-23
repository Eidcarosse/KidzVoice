import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";
import { fonts } from "../../utils/fonts";
import colors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    width: width(90),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    marginVertical: height(1),
  },
  iconTitleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleErrorView: {
    marginLeft: 10,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.mineShaft,
  },
  errorText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: colors.pomegranate,
  },
});

export default styles;
