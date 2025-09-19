import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";

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
    borderColor: colors.alto,
    justifyContent: "space-between",
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
  },
  textStyle: {
    flex: 1,
    color: colors.nobel,
    fontSize: 16,
  },
});

export default styles;
