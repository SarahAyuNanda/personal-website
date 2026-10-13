import { StyleSheet } from "@react-pdf/renderer";

export const projectStyle = StyleSheet.create({
    container: {
        paddingVertical: 1,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 2,
    },
    titleGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    title: {
        fontSize: 13,
        fontWeight: 600,
        color: "#7c3aed",
        textDecoration: "none",
    },
    badge: {
        fontSize: 7,
        color: "#fff",
        backgroundColor: "#64748b",
        borderRadius: 2,
        paddingHorizontal: 4,
        paddingVertical: 1.5,
        textTransform: "uppercase",
    },
    smallText: {
        fontSize: 10,
    },
    link: {
        fontSize: 10,
        color: "black",
        textDecoration: "none",
    },
    summary: {
        marginTop: 2,
    },
    stack: {
        marginTop: 2,
        marginBottom: 3,
    },
    stackLabel: {
        fontWeight: 600,
    },
});
