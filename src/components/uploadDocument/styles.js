import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  uploadBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.blueRibbon,
    borderRadius: 10,
    padding: 12,
    marginVertical: 20,
    minHeight: height(8),
    marginHorizontal: 16,
    backgroundColor: colors.lightDodgerBlue,
  },
  uploadText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.blueRibbon,
  },
});

export default styles;
