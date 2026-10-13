import { ProfileProps } from "@/components/organisms/pdf/resume/profile/model";
import { profileStyle as style } from "@/components/organisms/pdf/resume/profile/style";
import { Link, Text, View } from "@react-pdf/renderer";
import { PropsWithChildren } from "react";

const stripProtocol = (url: string) =>
    url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export const ProfileList = ({ children }: PropsWithChildren) => (
    <View style={style.list}>{children}</View>
);

export const Profile = ({ network, url }: ProfileProps) => {
    return (
        <Text style={style.item}>
            <Text style={style.network}>{network}: </Text>
            <Link src={url} style={style.link}>
                {stripProtocol(url)}
            </Link>
        </Text>
    );
};
