import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../util/api";
// import { getCookie } from "cookies-next";

export const DisplayBrand = (PageNumber: number, Search: string) => {
    return useQuery(["brands", PageNumber, Search], () => {
        return api.get(
            `/api/brands?search=${Search}&paginate=10&page=${PageNumber}`
        );
    });
};

export const ShowBrandDetail = (id: number | string | null) => {
    return useQuery(["brands", id], () => {
        return api.get(`/api/brands/${id}`);
    });
};

export const AddBrand = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.post(`/api/brands`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("brands");
            },
            onError: error,
        }
    );
};

export const ModifBrand = (success: any, error: any, id: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.put(`/api/brands/${id}`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("brands");
            },
            onError: error,
        }
    );
};

export const DeleteBrand = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (id: any) => {
            return api.delete(`/api/brands/${id}`);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("brands");
            },
            onError: error,
        }
    );
};
