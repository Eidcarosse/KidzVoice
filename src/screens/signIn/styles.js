import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";
import colors from "../../utils/AppColors";
import { height } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 22,
    fontFamily: fonts.medium,
    alignSelf: "center",
    marginTop: height(8),
    marginBottom: height(3),
  },
  alreadyText: {
    fontSize: 14,
    fontFamily: fonts.regular,
    alignSelf: "center",
    marginTop: height(5),
    marginBottom: 5,
  },
  guestBtnStyle: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grayChateau,
  },
  guestBtnText: {
    color: colors.emperor,
  },
});

export default styles;
