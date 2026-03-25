import { useQuery } from "@tanstack/react-query";
import { getRes, type GetResParams } from "@/services/api";

export const useRestaurants = (params: GetResParams) =>
  useQuery({
    queryKey: ["restaurants", params],
    queryFn: () => getRes(params),
  });
