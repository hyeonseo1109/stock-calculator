import { useEffect, useState } from "react";
import { supabase } from "@/shared/api";
import { StockItemProps } from "./types";
import Hangul from "hangul-js";

const matchSearch = (target: string, query: string): boolean => {
  if (!target || !query) return false;

  // 일반 포함 검색 (대소문자 무시)
  if (target.toLowerCase().includes(query.toLowerCase())) return true;

  // 초성 검색
  return Hangul.search(target, query) >= 0;
};

export const useStockList = (stockName?: string, memoSearch?: string) => {
  const [list, setList] = useState<StockItemProps[]>([]);

  const fetchData = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    let query = supabase
      .from("stock")
      .select("*")
      .eq("user_id", user.id)
      .order("is_favorite", { ascending: false })
      .order("created_date", { ascending: false });

    if (stockName) {
      query = query.eq("stock_name", stockName);
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
      return;
    }

    let result = data || [];

    if (memoSearch && memoSearch.trim() !== "") {
      result = result.filter((item) =>
        matchSearch(item.memo ?? "", memoSearch.trim()),
      );
    }

    setList(result);
  };

  useEffect(() => {
    fetchData();
  }, [stockName, memoSearch]);

  return { list, refetch: fetchData };
};
