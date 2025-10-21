import { View, Text, Image } from "react-native";
import React from "react";
import CustomHeader from "../../../components/customHeader/header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Images from "../../../assets/images";
import { styles } from "./styles";
import { Button } from "../../../components";
import ScreensName from "../../../routes/routes";
import { useTranslation } from "react-i18next";

export default function AiLiveVedio() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const { t } = useTranslation();

    return (
        <View style={[styles.container, { paddingTop: insets.top || 5 }]}>
            <CustomHeader title={t("aiLiveVedio.title")} />

            <Image source={Images.AIICON} style={styles.img} />

            <View style={styles.textBox}>
                <Text style={styles.questionText}>
                    {t("aiLiveVedio.description")}
                </Text>
            </View>

            <Button
                title={t("aiLiveVedio.playButton")}
                onPress={() => navigation.navigate(ScreensName.VIDEOVIEW)}
            />
        </View>
    );
}
