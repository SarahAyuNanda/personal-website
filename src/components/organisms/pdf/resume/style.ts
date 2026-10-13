import { StyleSheet } from "@react-pdf/renderer";

export const resumeStyle = StyleSheet.create({
    page: {
        paddingTop: 36,
        paddingHorizontal: 40,
        fontFamily: "Ubuntu",
        fontSize: 10,
        paddingBottom: 24,
    },
    heading: {
        paddingBottom: 6,
    },
    name: {
        fontSize: 18,
        fontWeight: 700,
    },
    label: {
        fontSize: 14,
        marginTop: 0,
        color: "#7c3aed",
        fontWeight: 600,
    },
    contact: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 4,
        gap: 6,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
    },
    projectTitle: {
        fontSize: 12,
        color: "#7c3aed",
        fontWeight: 600,
    },
    projectDescription: {
        marginTop: 2,
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 24,
        left: 0,
        right: 35,
        textAlign: "right",
        color: "#64748b",
    },
});
