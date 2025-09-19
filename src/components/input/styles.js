import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";
import colors from "../../utils/AppColors";

const styles = StyleSheet.create({
  inputContainer: {
    width: width(90),
    height: height(6),
    borderRadius: 16,
    paddingHorizontal: width(5),
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
    marginVertical: height(1),
    borderWidth: 1,
    borderColor: colors.alto,
    alignSelf: "center",
  },
  iconContainer: {
    marginRight: width(3),
  },
});

export default styles;
