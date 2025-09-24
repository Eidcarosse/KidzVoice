import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import colors from "../../../utils/AppColors";
import { fonts } from "../../../utils/fonts";

const styles = StyleSheet.create({
  moduleImage: {
    width: width(90),
    height: height(25),
    alignSelf: "center",
  },
  titleText: {
    marginHorizontal: 16,
    marginTop: height(1),
    color: colors.mineShaft,
    fontFamily: fonts.medium,
    fontSize: 22,
  },
  iconTextParentView: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: height(1),
  },
  iconTextView: {
    // marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  saveText: {
    color: colors.emperor,
    fontFamily: fonts.regular,
    fontSize: 14,
    marginLeft: 5,
  },
  lineView: {
    width: width(100),
    height: 1,
    backgroundColor: colors.alto,
    marginBottom: height(1),
  },
});

export default styles;
