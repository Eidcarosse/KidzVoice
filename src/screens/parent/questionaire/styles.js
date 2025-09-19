import { StyleSheet } from "react-native";
import colors from "../../../utils/AppColors";
import { fonts } from "../../../utils/fonts";
import { height } from "../../../utils/Dimensions";

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 16,
    marginTop: height(3),
  },
  progressLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },

  question: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    marginHorizontal: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    // paddingVertical: 5,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.black,
  },
  textArea: {
    borderWidth: 1,
    borderColor: colors.alto,
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    textAlignVertical: "top",
    marginHorizontal: 16,
    minHeight: height(15),
  },
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
    marginHorizontal: 16,
    minHeight: height(10),
  },
  uploadText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.blueRibbon,
  },
  nextBtn: {
    marginTop: height(30),
  },
});

export default styles;
