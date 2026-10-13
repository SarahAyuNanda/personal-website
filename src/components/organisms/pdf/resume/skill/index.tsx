import { SkillProps } from "@/components/organisms/pdf/resume/skill/model";
import { skillStyle as style } from "@/components/organisms/pdf/resume/skill/style";
import { Text } from "@react-pdf/renderer";

export const Skill = ({ name, keywords }: SkillProps) => {
    return (
        <Text style={style.container}>
            <Text style={style.category}>{name}: </Text>
            <Text>{keywords.join(", ")}</Text>
        </Text>
    );
};
