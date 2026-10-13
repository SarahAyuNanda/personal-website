import { HtmlText } from "@/components/organisms/pdf/resume/html-text";
import { WorkProps } from "@/components/organisms/pdf/resume/work/model";
import { workStyle as style } from "@/components/organisms/pdf/resume/work/style";
import { renderDates } from "@/lib/date";
import { Text, View } from "@react-pdf/renderer";

export const Work = ({
    company,
    description,
    employmentType,
    endDate,
    location,
    role,
    startDate,
    workType,
}: WorkProps) => {
    return (
        <View style={style.container} wrap={false}>
            <View style={style.infoRow}>
                <Text style={style.expTitle}>
                    {role} ({employmentType})
                </Text>
                <Text style={style.smallText}>
                    {renderDates(startDate, endDate)}
                </Text>
            </View>
            <View style={style.infoRow}>
                <Text style={style.company}>{company}</Text>
                <Text
                    style={style.smallText}
                >{`${location} - ${workType ?? "On-Site"}`}</Text>
            </View>
            <View style={style.list}>
                {description.map((h) => (
                    <View key={h} style={style.listItem}>
                        <Text>•</Text>
                        <HtmlText style={{ flex: 1 }} html={h} />
                    </View>
                ))}
            </View>
        </View>
    );
};
