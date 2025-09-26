import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import colors from "../../../utils/AppColors";
import { fonts } from "../../../utils/fonts";

const styles = StyleSheet.create({
  prifileImageView: {
    width: 130,
    height: 130,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: height(5),
  },
  profileImageStyle: {
    width: 130,
    height: 130,
    borderRadius: 70,
    // backgroundColor: "red",
    alignSelf: "center",
  },
  iconView: {
    padding: 10,
    borderRadius: 40,
    backgroundColor: colors.white,
    marginTop: -14,
    marginBottom: height(1),
  },
  accountText: {
    fontFamily: fonts.medium,
    fontSize: 24,
    color: colors.mineShaft,
    textAlign: "center",
  },

  nextButton: {
    marginTop: height(9),
  },
});

export default styles;
