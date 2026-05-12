import { supabase } from "@/shared/api";

export const toggleFavorite = async (id: string, current: boolean) => {
  const { error } = await supabase
    .from("stock")
    .update({ is_favorite: !current })
    .eq("id", id);
  if (error) throw error;
};
