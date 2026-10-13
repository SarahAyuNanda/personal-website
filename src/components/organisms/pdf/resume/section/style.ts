import { StyleSheet } from "@react-pdf/renderer";

export const sectionStyle = StyleSheet.create({
    container: {
        paddingTop: 6,
        paddingBottom: 12,
    },
    title: {
        textTransform: "uppercase",
        fontWeight: 600,
        color: "oklch(0.145 0 0)",
    },
    separator: {
        height: 1,
        marginTop: 1,
        marginBottom: 4,
        backgroundColor: "oklch(0.145 0 0)",
    },
});
