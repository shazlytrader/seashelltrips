import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type DbTour = Database["public"]["Tables"]["tours"]["Row"];
export type DbReview = Database["public"]["Tables"]["reviews"]["Row"];
export type DbOffer = Database["public"]["Tables"]["special_offers"]["Row"];
export type DbFaq = Database["public"]["Tables"]["tour_faqs"]["Row"];

export function useTours() {
  return useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tours")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data as DbTour[];
    },
  });
}

export function useTourBySlug(slug: string) {
  return useQuery({
    queryKey: ["tour", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tours")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .maybeSingle();
      if (error) throw error;
      return data as DbTour | null;
    },
    enabled: !!slug,
  });
}

export function useTourFaqs(tourId: string | undefined) {
  return useQuery({
    queryKey: ["tour-faqs", tourId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tour_faqs")
        .select("*")
        .eq("tour_id", tourId!)
        .order("sort_order");
      if (error) throw error;
      return data as DbFaq[];
    },
    enabled: !!tourId,
  });
}

export function useToursByCategory(category: string) {
  return useQuery({
    queryKey: ["tours", category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tours")
        .select("*")
        .eq("category", category)
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data as DbTour[];
    },
  });
}

export function useFeaturedTours() {
  return useQuery({
    queryKey: ["tours", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tours")
        .select("*")
        .eq("featured", true)
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data as DbTour[];
    },
  });
}

export function useReviews() {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data as DbReview[];
    },
  });
}

export function useOffers() {
  return useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("special_offers")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data as DbOffer[];
    },
  });
}
