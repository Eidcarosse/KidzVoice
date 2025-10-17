import React, { useState, useMemo } from "react";
import {
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    Text,
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
        const query = searchText?.toLowerCase().trim();
        if (!query) return teachers?.filter(Boolean) || [];

        return (
            teachers
                ?.filter(Boolean) // removes null/undefined
                ?.filter((teacher) => {
                    const name = teacher?.name?.toLowerCase() || "";
                    const title = teacher?.title?.toLowerCase() || "";
                    const language = teacher?.language?.toLowerCase() || "";
                    const location = teacher?.location?.toLowerCase() || "";
                    return (
                        name.includes(query) ||
                        title.includes(query) ||
                        language.includes(query) ||
                        location.includes(query)
                    );
                }) || []
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
                    data={filteredTeachers || []}
                    keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
                    renderItem={({ item }) =>
                        item ? <TeacherCard item={item} isTeacher /> : null
                    }
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
