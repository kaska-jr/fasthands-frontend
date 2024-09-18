import { useQuery } from "@tanstack/react-query";
import {
  getArtisanAvailability,
  getArtisanPricing,
  getArtisanProfile,
  getArtisanServiceById,
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

export function useSearchArtisan() {
  return useQuery({
    queryKey: ["search-artisan"],
    queryFn: () => searchArtisan(),
  });
}

export function useGetArtisanPricing() {
  return useQuery({
    queryKey: ["artisan-pricings"],
    queryFn: () => getArtisanPricing(),
  });
}

export function useGetArtisanServiceById(id) {
  return useQuery({
    queryKey: ["artisan-service", id],
    queryFn: () => getArtisanServiceById(id),
  });
}
