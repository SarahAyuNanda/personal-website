import { StyleSheet } from "@react-pdf/renderer";

export const profileStyle = StyleSheet.create({
    list: {
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: 16,
        rowGap: 2,
    },
    item: {
        paddingVertical: 1,
    },
    network: {
        fontWeight: 600,
    },
    link: {
        color: "#7c3aed",
        textDecoration: "none",
    },
});
