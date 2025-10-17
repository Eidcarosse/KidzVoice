import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { fonts } from "../../utils/fonts";
import colors from "../../utils/AppColors";

export default function StudentCard({ index, name, title, level, image, highlighted }) {
    return (
        <View style={[styles.card, highlighted && styles.highlighted]}>
            <Text style={styles.index}>{index + 1}</Text>

            <View style={styles.avatarWrapper}>
                <Image source={{ uri: image }} style={styles.avatar} />
            </View>

            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.levelContainer}>
                <Text style={styles.levelText}>Level {level}</Text>
                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/616/616408.png" }}
                    style={styles.badge}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 14,
        marginVertical: 6,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 0.2,
        borderColor: colors.boulder
    },
    highlighted: {
        backgroundColor: "#E0EAFF",
    },
    index: {
        width: 24,
        fontSize: 16,
        fontFamily: fonts.regular,
        color: "#000",
    },
    avatarWrapper: {
        borderWidth: 2,
        borderColor: "#4f46e5",
        borderRadius: 30,
        padding: 2,
        marginRight: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.medium,
        color: "#111827",
    },
    title: {
        color: "#6b7280",
        fontSize: 13,
        fontFamily: fonts.medium,
        marginTop: 2,
    },
    levelContainer: {
        alignItems: "flex-end",
        justifyContent: 'space-between',
        flexDirection: "row",
        gap: 10
    },
    levelText: {
        fontSize: 14,
        color: "#111827",
        fontFamily: fonts.regular
    },
    badge: {
        width: 18,
        height: 18,
        tintColor: "#facc15",
        marginTop: 2,
    },
});
