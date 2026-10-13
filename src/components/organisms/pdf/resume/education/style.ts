import { StyleSheet } from "@react-pdf/renderer";

export const educationStyle = StyleSheet.create({
    container: {
        paddingVertical: 1,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 2,
    },
    title: {
        fontSize: 13,
        fontWeight: 600,
        color: "#7c3aed",
    },
    degree: {
        fontSize: 12,
        fontStyle: "italic",
    },
    text: {
        fontSize: 12,
        fontWeight: 400,
    },
    smallText: {
        fontSize: 10,
    },
});
