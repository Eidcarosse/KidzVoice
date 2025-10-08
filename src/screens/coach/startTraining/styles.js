import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import colors from "../../../utils/AppColors";
import { fonts } from "../../../utils/fonts";

const styles = StyleSheet.create({
  moduleImage: {
    width: width(90),
    height: height(25),
    alignSelf: "center",
    borderRadius: 10,
    marginTop: height(2),
  },
  titleText: {
    marginHorizontal: 16,
    marginTop: height(1),
    color: colors.mineShaft,
    fontFamily: fonts.medium,
    fontSize: 22,
  },
  btnStyle: {
    marginBottom: 40
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

  thumbnailContainer: {
    flexDirection: "row",
    marginVertical: height(1),
    // marginHorizontal: 16,
    alignItems: "center",
    borderWidth: 1,
    padding: 5,
    borderRadius: 15,
    borderColor: colors.alto,
    width: width(90),
    alignSelf: "center",
  },
  thumbnail: {
    width: 120,
    height: 90,
    borderRadius: 8,
  },
  thumbnailTitle: {
    fontSize: 16,
    color: colors.mineShaft,
    fontFamily: fonts.medium,
    marginLeft: 5,
    flex: 1,
  },
});

export default styles;
