import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";
import colors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 22,
    fontFamily: fonts.medium,
    alignSelf: "center",

    marginBottom: height(3),
    marginHorizontal: 16,
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
  menuView: {
    // width: width(80),
    alignItems: "flex-end",
    // alignSelf: "center",
    marginHorizontal: 16,
    marginTop: height(8),
  },

  menuStyle: {
    borderRadius: 10,
    alignItems: "center",
    marginTop: height(3.5),
  },
  menuAnchorStyle: {
    padding: 5,
    marginRight: 1,
    flexDirection: "row",
  },
  menuItemStyle: {
    alignSelf: "center",
    alignItems: "center",
  },
});

export default styles;
