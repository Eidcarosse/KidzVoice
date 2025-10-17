import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";
import { height } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 16,
    marginBottom: height(4),
    flexWrap: "wrap",
  },
  roleItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.blueRibbon,
    backgroundColor: "white",
  },
  selectedRoleItem: {
    backgroundColor: colors.blueRibbon,
    borderColor: colors.blueRibbon,
  },
  roleText: {
    fontSize: 14,
    color: colors.emperor,
    fontFamily: fonts.regular,
  },
  selectedRoleText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 14,
  },
});

export default styles;
