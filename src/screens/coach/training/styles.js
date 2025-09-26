import { StyleSheet } from "react-native";
import { fonts } from "../../../utils/fonts";
import colors from "../../../utils/AppColors";
import { height } from "../../../utils/Dimensions";

const styles = StyleSheet.create({
  modulesText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.black,
    marginHorizontal: 16,
    marginTop: height(2),
  },
});

export default styles;
