import { useEffect, useState } from "react";

import { supabase } from "@/shared/api";

import { StockItemProps } from "./types";

export const useStockList = (stockName?: string) => {
  const [list, setList] = useState<StockItemProps[]>([]);

  const fetchData = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    let query = supabase
      .from("stock")
      .select("*")
      .order("created_date", { ascending: false });

    if (stockName) {
      query = query.eq("stock_name", stockName);
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
      return;
    }

    setList(data || []);
  };

  useEffect(() => {
    fetchData();
  }, [stockName]);

  return {
    list,
    refetch: fetchData,
  };
};
