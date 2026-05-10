import { supabase } from "@/shared/api";

export const getStockList = async () => {
  const { data, error } = await supabase
    .from("stock")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
};
