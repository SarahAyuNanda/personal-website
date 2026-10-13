import { ProjectProps } from "@/components/organisms/pdf/resume/project/model";
import { projectStyle as style } from "@/components/organisms/pdf/resume/project/style";
import { Link, Text, View } from "@react-pdf/renderer";

export const Project = ({
    title,
    period,
    status,
    summary,
    stack,
    link,
}: ProjectProps) => {
    return (
        <View style={style.container} wrap={false}>
            <View style={style.infoRow}>
                <View style={style.titleGroup}>
                    <Text style={style.title}>
                        <Link style={style.title} src={link}>
                            {title}
                        </Link>
                    </Text>
                    {status === "under-maintenance" && (
                        <Text style={style.badge}>Under Maintenance</Text>
                    )}
                </View>
                <Text style={style.smallText}>{period}</Text>
            </View>
            <Text style={style.summary}>{summary}</Text>
            <Text style={style.stack}>
                <Text style={style.stackLabel}>Tech Stack: </Text>
                <Text>{stack.join(", ")}</Text>
            </Text>
        </View>
    );
};
