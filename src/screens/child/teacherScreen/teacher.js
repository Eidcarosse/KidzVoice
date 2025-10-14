import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    FlatList,
    TouchableOpacity,

} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./style";
import TeacherCard from "../../../components/teacherCard/teacherCard";
import StatusBarWrapper from "../../../components/customStatusbar";
import CustomHeader from "../../../components/customHeader/header";
import { teachers } from "../../../utils/Data";





export default function TeacherScreen() {
    return (
        <StatusBarWrapper>
            <View style={styles.container}>
                <CustomHeader title={"Teacher"} />

                <View style={styles.searchRow}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search-outline" size={18} color="#999" />
                        <TextInput
                            placeholder="Search for a course"
                            placeholderTextColor="#999"
                            style={styles.searchInput}
                        />
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <Ionicons name="filter-outline" size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={teachers}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <TeacherCard item={item} isTeacher={false} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 30 }}
                />
            </View>
        </StatusBarWrapper>
    );
}

