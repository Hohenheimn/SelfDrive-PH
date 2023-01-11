import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../util/api";
// import { getCookie } from "cookies-next";

export const DisplayBranches = (PageNumber: number, Search: string) => {
    return useQuery(["branch", PageNumber, Search], () => {
        return api.get(
            `/api/branches?search=${Search}&paginate=10&page=${PageNumber}`
        );
    });
};

export const ShowBranchDetail = (id: number | string | null) => {
    return useQuery(["branch", id], () => {
        return api.get(`/api/branches/${id}`);
    });
};

export const AddBranches = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.post(`/api/branches`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("branch");
            },
            onError: error,
        }
    );
};

export const ModifyBranches = (success: any, error: any, id: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (Payload: any) => {
            return api.put(`/api/branches/${id}`, Payload);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("branch");
            },
            onError: error,
        }
    );
};

export const DeleteBranch = (success: any, error: any) => {
    const queryClient = useQueryClient();
    return useMutation(
        (id: any) => {
            return api.delete(`/api/branches/${id}`);
        },
        {
            onSuccess: () => {
                success();
                queryClient.invalidateQueries("branch");
            },
            onError: error,
        }
    );
};
