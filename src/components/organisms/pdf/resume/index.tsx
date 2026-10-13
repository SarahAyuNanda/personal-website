"use client";

import { Education } from "@/components/organisms/pdf/resume/education";
import { IconText } from "@/components/organisms/pdf/resume/icon-text";
import { ResumeProps } from "@/components/organisms/pdf/resume/model";
import {
    Profile,
    ProfileList,
} from "@/components/organisms/pdf/resume/profile";
import { Section } from "@/components/organisms/pdf/resume/section";
import { Skill } from "@/components/organisms/pdf/resume/skill";
import { resumeStyle as style } from "@/components/organisms/pdf/resume/style";
import { Work } from "@/components/organisms/pdf/resume/work";
import { database } from "@/lib/data";
import { Document, Page, Text, View } from "@react-pdf/renderer";

export const Resume = ({ resume }: ResumeProps) => {
    const currentYear = new Date().getFullYear();

    const whatsapp = database.profiles.find((p) => p.network === "Whatsapp");

    return (
        <Document
            author={database.name}
            title={`${database.name} Resume ${currentYear}`}
        >
            <Page size={"LETTER"} style={style.page}>
                <View style={style.heading}>
                    <Text style={style.name}>{database.name}</Text>
                    <Text style={style.label}>{database.role}</Text>
                    <View style={style.contact}>
                        <IconText
                            icon={"at"}
                            type="text"
                            text={database.email}
                        />
                        <IconText
                            icon={"phone"}
                            type="link"
                            text={whatsapp?.url ?? ""}
                            label={database.phone}
                        />
                        <IconText
                            icon={"location"}
                            type="text"
                            text={database.location}
                        />
                        <IconText
                            icon={"link"}
                            type="link"
                            text={database.website}
                            label={database.website
                                .replace(/^https?:\/\//, "")
                                .replace(/\/$/, "")}
                        />
                    </View>
                </View>
                <Section title="profile" compact>
                    <ProfileList>
                        {resume.profiles
                            .filter((p) => p.network !== "Whatsapp")
                            .map((p) => (
                                <Profile
                                    key={p.id}
                                    network={p.network}
                                    url={p.url}
                                />
                            ))}
                    </ProfileList>
                </Section>
                <Section title="summary" compact>
                    <Text>{resume.bio}</Text>
                </Section>
                <Section title="skills" compact>
                    {resume.skills.map((s) => (
                        <Skill key={s.name} {...s} />
                    ))}
                </Section>
                <Section title="professional experience" compact>
                    {resume.works.map((w) => (
                        <Work key={w.company} {...w} />
                    ))}
                </Section>
                <Section title="project" compact></Section>
                <Section title="education" compact break>
                    {resume.educations.map((e) => (
                        <Education key={e.institution} {...e} />
                    ))}
                </Section>
            </Page>
        </Document>
    );
};
