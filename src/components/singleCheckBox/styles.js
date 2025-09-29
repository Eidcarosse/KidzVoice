import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";
import { width } from "../../utils/Dimensions";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
  parentView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
  },

  labelText: {
    width: width(80),
    // flex: 1,
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.regular,
    marginLeft: 10,
  },
});

export default styles;
