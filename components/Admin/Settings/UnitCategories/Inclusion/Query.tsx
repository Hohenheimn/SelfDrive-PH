import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../../../../util/api";
// import { getCookie } from "cookies-next";

export const Display = (PageNumber: number, Search: string) => {
    return useQuery(["inclusion-types", PageNumber, Search], () => {
        return api.get(
            `/api/inclusion-types?search=${Search}&paginate=10&page=${PageNumber}`
        );
    });
};

export const ShowDetail = (id: number | string | null) => {
    return useQuery(["inclusion-types", id], () => {
        return api.get(`/api/inclusion-types/${id}`);
    });
};

export const Add = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.post(`/api/inclusion-types`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("inclusion-types");
            },
            onError: error,
        }
    );
};

export const Update = (success: any, error: any, id: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.put(`/api/inclusion-types/${id}`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("inclusion-types");
            },
            onError: error,
        }
    );
};

export const Delete = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (id: any) => {
            return api.delete(`/api/inclusion-types/${id}`);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("inclusion-types");
            },
            onError: error,
        }
    );
};
