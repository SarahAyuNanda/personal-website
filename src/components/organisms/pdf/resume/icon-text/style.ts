import { StyleSheet } from "@react-pdf/renderer";

export const iconTextStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    text: {
        fontSize: 10,
        color: "black",
        textDecoration: "none",
    },
});
