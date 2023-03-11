import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../../util/api";

// import { getCookie } from "cookies-next";

export const Display = (PageNumber: number, Search: string) => {
    return useQuery(["reservation-list", PageNumber, Search], () => {
        return api.get(
            `/api/reservations?search=${Search}&paginate=10&page=${PageNumber}`
        );
    });
};

export const ShowDetail = (id: number | string | null) => {
    return useQuery(["reservation-detail", id], () => {
        return api.get(`/api/reservations/${id}`);
    });
};

export const Add = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.post(`/api/reservations`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("reservation-list");
            },
            onError: error,
        }
    );
};

export const Update = (success: any, error: any, id: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.put(`/api/reservations/${id}`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("reservation-list");
            },
            onError: error,
        }
    );
};

export const Delete = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (id: any) => {
            return api.delete(`/api/reservations/${id}`);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("reservation-list");
            },
            onError: error,
        }
    );
};
