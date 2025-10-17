import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import { fonts } from "../../../utils/fonts";
import colors from "../../../utils/AppColors";

const styles = StyleSheet.create({
  imageStyle: {
    width: width(85),
    height: height(20),
    alignSelf: "center",
    marginTop: height(5),
    marginBottom: height(3),
  },
  basicText: {
    fontSize: 24,
    fontFamily: fonts.medium,
    color: colors.mineShaft,
    textAlign: "center",
    marginBottom: height(1),
  },
  loremText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.boulder,
    textAlign: "center",
    marginBottom: height(6),
    marginHorizontal: 16,
  },
  textStyle: {
    flex: 1,
    fontSize: 16,
    color: colors.ebonyClay,
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
    marginHorizontal: 15,
  },
});

export default styles;
