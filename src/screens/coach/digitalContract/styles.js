import { StyleSheet } from "react-native";
import colors from "../../../utils/AppColors";
import { height } from "../../../utils/Dimensions";
import { fonts } from "../../../utils/fonts";

const styles = StyleSheet.create({
  digitalText: {
    fontSize: 24,
    color: colors.mineShaft,
    marginHorizontal: 16,
    marginTop: height(4),
    fontFamily: fonts.regular,
    marginBottom: height(1),
  },
  contractText: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.tundora,
    marginHorizontal: 16,
    marginBottom: height(2),
  },
  eSignatureText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.black,
    marginHorizontal: 16,
    marginTop: height(2),
  },
  eSignatureView: {
    marginHorizontal: 16,
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: colors.alto,
    height: height(12),
  },
  signatureImage: {
    width: "100%",
    height: height(12),
  },
  codeText: {
    fontFamily: fonts.regular,
    fontSize: 24,
    color: colors.mineShaft,
    marginHorizontal: 16,
    marginTop: height(2),
  },

  saveBtn: {
    marginVertical: height(4),
  },
});

export default styles;
