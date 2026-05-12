import { useEffect, useState } from "react";
import { supabase } from "@/shared/api";
import { StockItemProps } from "./types";

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
      .order("created_date", { ascending: false });

    // 전체보기("") 또는 undefined면 필터 안 함
    if (stockName) {
      query = query.eq("stock_name", stockName);
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
      return;
    }

    let result = data || [];

    // 메모 검색 필터
    if (memoSearch && memoSearch.trim() !== "") {
      result = result.filter((item) =>
        item.memo?.toLowerCase().includes(memoSearch.trim().toLowerCase()),
      );
    }

    setList(result);
  };

  useEffect(() => {
    fetchData();
  }, [stockName, memoSearch]);

  return { list, refetch: fetchData };
};
