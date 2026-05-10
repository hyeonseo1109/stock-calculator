import { supabase } from "@/shared/api";

export const getStockList = async (userId: string) => {
  const { data, error } = await supabase
    .from("stock")
    .select("*")
    .eq("user_id", userId)
    .order("created_date", { ascending: false });

  if (error) throw error;

  return data;
};
