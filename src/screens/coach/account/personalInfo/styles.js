import { StyleSheet } from "react-native";
import { fonts } from "../../../../utils/fonts";
import colors from "../../../../utils/AppColors";
import { height } from "../../../../utils/Dimensions";

const styles = StyleSheet.create({
  personalText: {
    fontFamily: fonts.regular,
    color: colors.mineShaft,
    fontSize: 24,
    marginHorizontal: 16,
    marginTop: height(3),
    marginBottom: height(2),
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 10,
    height: 50,
    marginHorizontal: 15
  },
  textStyle: {
    flex: 1,
    fontSize: 16,
    color: colors.ebonyClay
  },
  titleText: {
    fontFamily: fonts.regular,
    color: colors.mineShaft,
    fontSize: 16,
    marginHorizontal: 16,
  },
  nextButton: {
    marginTop: height(9),
  },
});

export default styles;
