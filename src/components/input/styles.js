import { StyleSheet } from "react-native";
import { fontSizes, height, width } from "../../utils/Dimensions";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  iconContainer: {
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 0,
    paddingHorizontal: 1,
  },
});

export default styles;
