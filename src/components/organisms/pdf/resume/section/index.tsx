import { SectionProps } from "@/components/organisms/pdf/resume/section/model";
import { sectionStyle as style } from "@/components/organisms/pdf/resume/section/style";
import { Text, View } from "@react-pdf/renderer";

export const Section = ({
    title,
    compact,
    children,
    break: shouldBreak = false,
}: SectionProps) => {
    return (
        <View
            style={{
                ...style.container,
                ...(compact ? { paddingBottom: 6 } : {}),
            }}
            break={shouldBreak}
        >
            <Text style={style.title}>{title}</Text>
            <View
                style={{
                    ...style.separator,
                    ...(compact ? { marginBottom: 2 } : {}),
                }}
            />
            {children}
        </View>
    );
};
