import { StyleSheet } from "react-native";
import { width } from "../../utils/Dimensions";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
  parentView: {
    width: width(90),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 10,
  },
  iconView: {
    padding: 7,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.catSkillWhite,
  },
  titleText: {
    color: colors.mineShaft,

    fontSize: 24,
    fontFamily: fonts.regular,
  },
});

export default styles;
