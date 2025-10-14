import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../../../utils/fonts'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginHorizontal: 16

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

})



export default styles

