import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
  parentView: { marginHorizontal: 16 },
  questionText: {
    color: colors.mineShaft,
    fontSize: 16,
    fontFamily: fonts.regular,
    // marginHorizontal: 16,
  },
  optionsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionTouchable: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  optionText: {
    color: colors.emperor,
    fontSize: 14,
    fontFamily: fonts.regular,
  },
});

export default styles;
