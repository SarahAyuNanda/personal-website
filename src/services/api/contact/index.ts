import { MessageValues } from "@/components/organisms/form/contact/model";
import { api } from "@/services/api";

export const postContact = async (values: MessageValues) => {
  const response = await api.post("/contact", values);
  return response;
};
