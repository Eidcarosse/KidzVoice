import { StyleSheet } from "react-native";
import colors from "../../../utils/AppColors";
import { fonts } from "../../../utils/fonts";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 16,
    color: colors.mineShaft,
    fontFamily: fonts.medium,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  newRequestCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blueRibbon,
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 16,
  },
  newRequestTitle: {
    fontSize: 18,
    color: colors.white,
    // fontWeight: "600",
    fontFamily: fonts.regular,
  },
  newRequestSubtitle: {
    fontSize: 12,
    color: colors.gallery,
    fontFamily: fonts.regular,
  },

  smallCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 16,
  },
  smallCard: {
    width: "48%",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.alto,
  },
  smallCardTitle: {
    fontSize: 16,
    // fontWeight: "600",
    fontFamily: fonts.medium,
    color: colors.black,
  },
  smallCardSubtitle: {
    fontSize: 11,
    color: colors.scorpion,
    width: "80%",
  },
  studentCard: {
    flexDirection: "row",
    borderRadius: 15,
    padding: 5,
    marginVertical: 6,
    alignItems: "center",
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.alto,
    borderRadius: 10,
  },
  studentImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  studentInfo: {
    marginLeft: 10,
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    color: colors.blueRibbon,
    fontFamily: fonts.medium,
  },
  studentRole: {
    fontSize: 10,
    color: colors.black,
    marginVertical: 2,
    fontFamily: fonts.regular,
  },
  classInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  classText: {
    fontSize: 9,
    color: colors.emperor,
    marginLeft: 5,
  },
});

export default styles;
