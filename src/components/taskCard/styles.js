// styles.ts
import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";
import colors from "../../utils/AppColors";
import { height } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  parentView: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.alto,
    borderRadius: 10,
    padding: 8,
    backgroundColor: colors.white, // optional
    marginVertical: height(1),
  },
  iconTextView: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // ✅ so title+progress expand
  },
  titleProgressView: {
    flex: 1, // ✅ allow progress row to expand
    marginLeft: 10,
  },
  titleText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.mineShaft,
  },
  durationText: {
    fontSize: 14,
    color: colors.emperor,
    marginLeft: 8,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  progressBar: {
    flex: 1, // ✅ bar stretches
    height: 6,
    borderRadius: 4,
  },
  progressText: {
    marginLeft: 8,
    fontSize: 11,
    color: colors.emperor,
    fontFamily: fonts.regular,
  },
});

export default styles;
