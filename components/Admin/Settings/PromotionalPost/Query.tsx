import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../../../util/api";

// import { getCookie } from "cookies-next";

export const Display = (PageNumber: number, Search: string) => {
    return useQuery(["promotional-posts", PageNumber, Search], () => {
        return api.get(
            `/api/promotional-posts?search=${Search}&paginate=10&page=${PageNumber}`
        );
    });
};

export const ShowDetail = (id: number | string | null) => {
    return useQuery(["promotional-posts", id], () => {
        return api.get(`/api/promotional-posts/${id}`);
    });
};

export const Add = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.post(`/api/promotional-posts`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("promotional-posts");
            },
            onError: error,
        }
    );
};

export const Update = (success: any, error: any, id: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.put(`/api/promotional-posts/${id}`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("promotional-posts");
            },
            onError: error,
        }
    );
};

export const Delete = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (id: any) => {
            return api.delete(`/api/promotional-posts/${id}`);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("promotional-posts");
            },
            onError: error,
        }
    );
};
