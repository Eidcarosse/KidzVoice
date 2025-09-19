import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
  parentView: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.alto,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  textStyle: {
    fontSize: 13,
    fontFamily: fonts.regular,
    color: colors.mineShaft,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.alto,
  },
});

export default styles;
