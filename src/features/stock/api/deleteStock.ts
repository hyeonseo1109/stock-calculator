import { supabase } from "@/shared/api";

export const deleteStock = async (id: string) => {
  const { error } = await supabase.from("stock").delete().eq("id", id);
  if (error) throw error;
};
