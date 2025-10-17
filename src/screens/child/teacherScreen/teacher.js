import React, { useState, useMemo } from "react";
import {
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import TeacherCard from "../../../components/teacherCard/teacherCard";
import StatusBarWrapper from "../../../components/customStatusbar";
import CustomHeader from "../../../components/customHeader/header";
import { teachers } from "../../../utils/Data";
import { infoToastMessage } from "../../../utils/Methods";

export default function TeacherScreen() {
    const [searchText, setSearchText] = useState("");

    const filteredTeachers = useMemo(() => {
        const query = searchText.toLowerCase();
        if (!query) return teachers;

        return teachers.filter(
            (teacher) =>
                teacher.name.toLowerCase().includes(query) ||
                teacher.title.toLowerCase().includes(query) ||
                teacher.language.toLowerCase().includes(query) ||
                teacher.location.toLowerCase().includes(query)
        );
    }, [searchText]);

    return (
        <StatusBarWrapper>
            <View style={styles.container}>
                <CustomHeader title={"Teachers"} />

                {/* 🔹 Search bar */}
                <View style={styles.searchRow}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search-outline" size={18} color="#999" />
                        <TextInput
                            placeholder="Search by name, course, or location"
                            placeholderTextColor="#999"
                            style={styles.searchInput}
                            value={searchText}
                            onChangeText={setSearchText}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={() => infoToastMessage("Filter", "Coming soon!")}
                    >
                        <Ionicons name="filter-outline" size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* 🔹 Teacher list */}
                <FlatList
                    data={filteredTeachers}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TeacherCard item={item} isTeacher={true} />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <View style={{ alignItems: "center", marginTop: 50 }}>
                            <Ionicons name="alert-circle-outline" size={28} color="#999" />
                            <Text style={{ color: "#999", marginTop: 10 }}>
                                No teachers found.
                            </Text>
                        </View>
                    }
                    contentContainerStyle={{ paddingBottom: 30 }}
                />
            </View>
        </StatusBarWrapper>
    );
}
