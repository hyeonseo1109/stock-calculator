import { useEffect, useState } from "react";
import { getStockList } from "../api/getStockList";
import { supabase } from "@/shared/api";
import { StockItemProps } from "./types";

export const useStockList = () => {
  const [list, setList] = useState<StockItemProps[]>([]);

  const fetchData = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const data = await getStockList(user.id);
    setList(data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { list, refetch: fetchData };
};
