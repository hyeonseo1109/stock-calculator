import { supabase } from "@/shared/api";

export const getStockNames = async (userId: string) => {
  const { data, error } = await supabase
    .from("stock")
    .select("stock_name")
    .eq("user_id", userId);

  if (error) throw error;

  return [...new Set(data.map((d) => d.stock_name))];
};
