import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 15,
    margin: 15,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 3,
    backgroundColor: colors.white,
    borderColor: colors.alto,
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 8,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  moduleTitle: {
    fontSize: 14,

    fontFamily: fonts.regular,
    color: colors.black,
  },
  titleIconView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTitle: {
    fontSize: 12,

    fontFamily: fonts.regular,
    color: colors.black,
  },
  iconsRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 4,
  },
  iconText: {
    fontSize: 10,

    marginRight: 5,
    fontFamily: fonts.regular,
    color: colors.emperor,
  },
  description: {
    fontSize: 12,
    marginVertical: 8,
    fontFamily: fonts.regular,
    color: colors.boulder,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  progressText: {
    fontSize: 14,
    marginLeft: 6,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  completedText: {
    fontSize: 12,
    marginLeft: 6,
    fontFamily: fonts.regular,
    color: colors.doveGray,
  },
  progressBar: {
    height: 6,
    borderRadius: 4,
    marginBottom: 12,
  },
  startButton: {
    marginHorizontal: 0,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default styles;
