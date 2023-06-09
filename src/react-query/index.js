import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProductById, getProducts, getProductsByCategory, login, register, getUserInfo, updateUserInfo, logout, toggleFavoriteProduct, getProductsByFavorites } from "../api";

export const useProducts = (showItemCount) => {
  const { data, isLoading } = useQuery([showItemCount], getProducts);
  return { data, isLoading };
};

export const useProductsByCategory = (category) => {
  const { data, isLoading } = useQuery([category], getProductsByCategory);
  return { data, isLoading };
};

export const useProductById = (productId) => {
  const { data, isLoading } = useQuery([productId], getProductById);
  return { data, isLoading };
};

export const useUserInfo = () => {
  return useQuery({
    queryKey: ["uid"],
    queryFn: getUserInfo,
    initialData: {},
  });
};

export const useSignInWithEmailPassword = () => {
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useRegisterWithEmailPassword = () => {
  const queryClient = useQueryClient();
  return useMutation(register, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useToggleFavoriteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleFavoriteProduct, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useProductsByFavorites = (uid) => {
  const { data, isLoading } = useQuery([uid], getProductsByFavorites);
  return { data, isLoading };
};