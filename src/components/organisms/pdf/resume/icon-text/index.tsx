import { Icon } from "@/components/organisms/pdf/resume/icon";
import { IconTextProps } from "@/components/organisms/pdf/resume/icon-text/model";
import { iconTextStyle as style } from "@/components/organisms/pdf/resume/icon-text/style";
import { Link, Text, View } from "@react-pdf/renderer";

export const IconText = ({
    icon,
    text,
    type = "text",
    label,
    color = "black",
}: IconTextProps) => {
    const renderText = () => {
        switch (type) {
            case "text":
                return <Text style={style.text}>{text}</Text>;
            case "link":
                return (
                    <Text style={style.text}>
                        <Link style={style.text} src={text}>
                            {label ?? text}
                        </Link>
                    </Text>
                );
        }
    };

    return (
        <View style={style.container}>
            <Icon size={10} name={icon} color={color} />
            {renderText()}
        </View>
    );
};
