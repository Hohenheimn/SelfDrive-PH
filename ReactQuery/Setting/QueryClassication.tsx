import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../util/api";
// import { getCookie } from "cookies-next";

export const DisplayClassifications = (PageNumber: number, Search: string) => {
    return useQuery(["Classifications", PageNumber, Search], () => {
        return api.get(
            `/api/unit_classifications?search=${Search}&paginate=10&page=${PageNumber}`
        );
    });
};

export const ShowClassificationsDetail = (id: number | string | null) => {
    return useQuery(["Classifications-detail", id], () => {
        return api.get(`/api/unit_classifications/${id}`);
    });
};

export const AddClassifications = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.post(`/api/unit_classifications`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("Classifications");
            },
            onError: error,
        }
    );
};

export const ModifyClassifications = (success: any, error: any, id: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.put(`/api/unit_classifications/${id}`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("Classifications");
            },
            onError: error,
        }
    );
};

export const DeleteClassifications = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (id: any) => {
            return api.delete(`/api/unit_classifications/${id}`);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("Classifications");
            },
            onError: error,
        }
    );
};
