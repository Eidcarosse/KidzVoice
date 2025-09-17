import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    alignItems: "center",
    // paddingVertical: 5,
    marginVertical: 2,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.black,
  },
});

export default styles;
