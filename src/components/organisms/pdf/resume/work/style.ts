import { StyleSheet } from "@react-pdf/renderer";

export const workStyle = StyleSheet.create({
    container: {
        paddingVertical: 1,
    },
    smallText: {
        fontSize: 10,
    },
    expTitle: {
        fontSize: 13,
        fontWeight: 600,
    },
    company: {
        fontSize: 12,
        fontWeight: 600,
        color: "#7c3aed",
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 2,
    },
    list: {
        marginVertical: 3,
    },
    listItem: {
        marginBottom: 1,
        flexDirection: "row",
        gap: 4,
    },
});
