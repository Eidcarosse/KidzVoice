import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
  buttonView: {
    width: width(90),
    height: height(6),
    borderRadius: 16,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: height(1),
    paddingLeft: width(2),
    paddingRight: width(2),
    backgroundColor: colors.blueRibbon,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    color: colors.white,
    fontFamily: fonts.regular,
  },
});

export default styles;
