import { database } from "@/lib/data";

type Resume = typeof database;
export interface ResumeProps {
    resume: Resume;
}
