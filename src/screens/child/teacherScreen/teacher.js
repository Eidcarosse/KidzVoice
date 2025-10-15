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
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

const teachers = [
    {
        id: "1",
        name: "Stephane Maarek",
        title: "CBT | Diagnosis | Crisis Care.......",
        location: "Rawalpindi, Pakistan",
        language: "English",
        rating: 4.9,
        image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        id: "2",
        name: "Stephane Maarek",
        title: "CBT | Diagnosis | Crisis Care.......",
        location: "Rawalpindi, Pakistan",
        language: "English",
        rating: 4.9,
        image: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
        id: "3",
        name: "Sarah Johnson",
        title: "Therapist | Stress Management | Self-Growth",
        location: "Lahore, Pakistan",
        language: "Urdu, English",
        rating: 4.8,
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        id: "4",
        name: "Ahmed Raza",
        title: "CBT | Anxiety | Emotional Healing",
        location: "Karachi, Pakistan",
        language: "Urdu, English",
        rating: 4.7,
        image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
        id: "5",
        name: "Emily Carter",
        title: "Psychologist | Family Therapy | Life Coach",
        location: "Islamabad, Pakistan",
        language: "English",
        rating: 4.9,
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    }


];

const TeacherCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.metaRow}>
                    <View style={styles.metaItem}>
                        <Ionicons name="location-outline" size={14} color="#555" />
                        <Text style={styles.metaText}>{item.location}</Text>
                    </View>
                    <View style={styles.metaItem}>
                        <Ionicons name="globe-outline" size={14} color="#555" />
                        <Text style={styles.metaText}>{item.language}</Text>
                    </View>
                    <View style={styles.metaItem}>
                        <Ionicons name="star" size={14} color="#FFA500" />
                        <Text style={styles.metaText}>{item.rating}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={styles.link}>view profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function TeacherScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="chevron-back" size={24} color="black" />
                <Text style={styles.headerTitle}>Teacher</Text>
                <View style={{ width: 24 }} /> {/* Spacer for symmetry */}
            </View>

            {/* Search Bar */}
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

            {/* Teacher List */}
            <FlatList
                data={teachers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TeacherCard item={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30 }}
            />
        </SafeAreaView>
    );
}

