import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
  parentView: {
    marginHorizontal: 16,
    paddingVertical: height(1),
    borderRadius: 16,
    alignItems: "center",
    marginVertical: height(1),
    paddingLeft: width(2),
    paddingRight: width(2),
    // backgroundColor: colors.blueRibbon,
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.blueRibbon,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.emperor,
    textAlign: "center",
    flex: 1,
    // backgroundColor: "red",
  },
  imageView: {
    borderWidth: 1,
    padding: 8,
    borderColor: colors.blueRibbon,
    borderRadius: 12,
  },
  imageStyle: {},
});

export default styles;
