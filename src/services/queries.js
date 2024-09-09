import { useQuery } from "@tanstack/react-query";
import {
  getArtisanAvailability,
  getArtisanProfile,
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
