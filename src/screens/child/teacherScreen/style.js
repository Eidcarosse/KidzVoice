import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
    },
    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingHorizontal: 12,
        height: 44,
        borderWidth: 1,
        borderColor: "#E5E5E5",
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        color: "#000",
    },
    filterButton: {
        backgroundColor: "#fff",
        borderRadius: 12,
        marginLeft: 10,
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#E5E5E5",
    },
    card: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 16,
        marginVertical: 6,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 14,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
    },
    title: {
        color: "#555",
        fontSize: 13,
        marginTop: 2,
    },
    metaRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
        gap: 10,
    },
    metaItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
    },
    metaText: {
        color: "#555",
        fontSize: 8,
    },
    link: {
        color: "#1E88E5",
        fontSize: 13,
        fontWeight: "500",
        marginLeft: 8,
    },
})



export default styles

