import { ContactPayload, postContact } from "@/services/api/contact";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

interface Props {
    onSuccess: (response: AxiosResponse) => void;
    onError: (error: AxiosError) => void;
}

export const useSendEmail = ({ onSuccess, onError }: Props) => {
    return useMutation({
        mutationKey: ["send-email"],
        mutationFn: (message: ContactPayload) => postContact(message),
        onSuccess,
        onError,
    });
};
