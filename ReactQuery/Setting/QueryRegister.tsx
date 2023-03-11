import { useMutation, useQueryClient } from "react-query";
import api from "../../util/api";

export const Rergister = (success: any, error: any) => {
    return useMutation(
        (Payload: any) => {
            return api.post(`/api/register`, Payload);
        },
        {
            onSuccess: () => {
                success();
            },
            onError: error,
        }
    );
};
