import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from "../../utils/fonts";

const AiCustomHeader = ({ user }) => {
    return (
        <View style={styles.header}>
            <View style={styles.left}>
                <Image source={user.img} style={styles.userImg} />
                <Text style={styles.greeting}>Hi {user.name}</Text>
            </View>

            <Text style={styles.title}>Question</Text>

            <TouchableOpacity>
                <Ionicons name="time-outline" size={22} color="#222" />
            </TouchableOpacity>
        </View>
    );
};

export default AiCustomHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
    },
    userImg: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 8,
    },
    greeting: {
        fontSize: 16,
        fontFamily: fonts.regular,
        color: "#333",
    },
    title: {
        fontSize: 18,
        fontFamily: fonts.bold,
        color: "#000",
        marginRight: 20,

    },
});
