import { StyleSheet } from "react-native";
import colors from "../../utils/AppColors";
import { height } from "../../utils/Dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bloader
    },
    img: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: height(4),

    }
})