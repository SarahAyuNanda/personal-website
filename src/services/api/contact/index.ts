import { MessageValues } from "@/components/organisms/form/contact/model";
import { api } from "@/services/api";

export type ContactPayload = MessageValues & { captchaToken: string };

export const postContact = async (values: ContactPayload) => {
    const response = await api.post("/contact", values);
    return response;
};
