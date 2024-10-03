import { useQuery } from "@tanstack/react-query";
import {
  getArtisanAvailability,
  getArtisanBookings,
  getArtisanPricing,
  getArtisanProfile,
  getArtisanProfileById,
  getArtisanServiceById,
  getClientBookings,
  getClientProfile,
  searchArtisan,
} from "./api";

// Artisan Side Endpoints
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

export function useGetArtisanBookings() {
  return useQuery({
    queryKey: ["artisan-bookings"],
    queryFn: () => getArtisanBookings(),
  });
}

//Client Side Endpoints
export function useSearchArtisan(searchParams) {
  return useQuery({
    queryKey: ["search-artisan", searchParams],
    queryFn: () => searchArtisan(searchParams),
  });
}

export function useGetClientProfile() {
  return useQuery({
    queryKey: ["client-profile"],
    queryFn: () => getClientProfile(),
  });
}

export function useGetArtisanProfileById(id) {
  return useQuery({
    queryKey: ["artisan-profile-by-id", id],
    queryFn: () => getArtisanProfileById(id),
  });
}

export function useGetClientBookings() {
  return useQuery({
    queryKey: ["client-bookings"],
    queryFn: () => getClientBookings(),
  });
}
