import { useQuery } from "@tanstack/react-query";
import {
  getArtisanAvailability,
  getArtisanPricing,
  getArtisanProfile,
  getArtisanServiceById,
  getClientProfile,
  searchArtisan,
} from "./api";

export function useGetArtisanProfile() {
  return useQuery({
    queryKey: ["artisan-profile"],
    queryFn: () => getArtisanProfile(),
  });
}

export function useGetArtisanAvailability() {
  return useQuery({
    queryKey: ["artisan-availability-status"],
    queryFn: () => getArtisanAvailability(),
  });
}

export function useGetArtisanPricing() {
  return useQuery({
    queryKey: ["artisan-pricing"],
    queryFn: () => getArtisanPricing(),
  });
}

export function useGetArtisanServiceById(id) {
  return useQuery({
    queryKey: ["artisan-service", id],
    queryFn: () => getArtisanServiceById(id),
  });
}

//Client Side Endpoints
export function useSearchArtisan() {
  return useQuery({
    queryKey: ["search-artisan"],
    queryFn: () => searchArtisan(),
  });
}

export function useGetClientProfile() {
  return useQuery({
    queryKey: ["client-profile"],
    queryFn: () => getClientProfile(),
  });
}
