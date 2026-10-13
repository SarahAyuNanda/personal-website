import { EducationProps } from "@/components/organisms/pdf/resume/education/model";
import { educationStyle as style } from "@/components/organisms/pdf/resume/education/style";
import { renderDates } from "@/lib/date";
import { Text, View } from "@react-pdf/renderer";

export const Education = ({
    degree,
    endDate,
    field,
    institution,
    location,
    startDate,
}: EducationProps) => {
    return (
        <View style={style.container} wrap={false}>
            <View style={style.infoRow}>
                <Text style={style.title}>{institution}</Text>
                <Text style={style.smallText}>{location}</Text>
            </View>
            <View style={style.infoRow}>
                <View style={style.row}>
                    <Text style={style.degree}>{degree}</Text>
                    <Text style={style.text}>&nbsp;in {field}</Text>
                </View>
                <Text style={style.smallText}>
                    {renderDates(startDate, endDate)}
                </Text>
            </View>
        </View>
    );
};
