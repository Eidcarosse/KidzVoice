import { StyleSheet } from "react-native";
import colors from "../../../utils/AppColors";
import { fonts } from "../../../utils/fonts";
import { height } from "../../../utils/Dimensions";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: height(3),
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  notificationBtn: {
    marginLeft: "auto",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    padding: 6,
  },
  progressHeaderView: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.regular,
  },
  viewDetailsText: {
    fontSize: 16,
    color: colors.blueRibbon,
    fontFamily: fonts.regular,
  },

  progressCircleTextView: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    alignSelf: "center",
    // backgroundColor: "red",
  },
  progressTitleText: {
    fontSize: 14,
    color: colors.outerSpace,
    fontFamily: fonts.regular,
  },
  teacherCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blueRibbon,
    borderRadius: 12,
    paddingVertical: 16,
    marginVertical: 20,
    marginHorizontal: 26,
    paddingHorizontal: 16,
  },
  teacherTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    color: colors.white,
    fontFamily: fonts.regular,
  },
  teacherSubtitle: {
    fontSize: 11,
    color: colors.white,
    fontFamily: fonts.regular,
    marginLeft: 10,
  },
  subHeading: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.medium,
    marginHorizontal: 16,
  },

  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  optionBtn: {
    width: "48%",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.alto,
  },
  optionText: {
    marginLeft: 8,
    fontSize: 13,
    flexShrink: 1,
    color: colors.black,
    fontFamily: fonts.regular,
  },
});

export default styles;
