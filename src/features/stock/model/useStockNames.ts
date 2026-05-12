import { useEffect, useState } from "react";
import { getStockNames } from "../api/getStockNames";
import { supabase } from "@/shared/api";

export const useStockNames = () => {
  const [names, setNames] = useState<string[]>([]);

  const fetchNames = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const result = await getStockNames(user.id);
    setNames(result);
  };

  useEffect(() => {
    fetchNames();
  }, []);

  return { names, refetch: fetchNames };
};
