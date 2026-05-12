import { useEffect, useState } from "react";
import { supabase } from "@/shared/api";
import { StockItemProps } from "./types";
import Hangul from "hangul-js";

const PAGE_SIZE = 10;

const matchSearch = (target: string, query: string): boolean => {
  if (!target || !query) return false;

  if (target.toLowerCase().includes(query.toLowerCase())) return true;

  return Hangul.search(target, query) >= 0;
};

export const useStockList = (stockName?: string, memoSearch?: string) => {
  const [list, setList] = useState<StockItemProps[]>([]);
  const [page, setPage] = useState(1);

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

    // 종목 필터
    if (stockName) {
      query = query.eq("stock_name", stockName);
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
      return;
    }

    let result = data || [];

    // 메모 검색
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

  // 페이지 바뀔 때 맨 위로
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  // 검색/종목 바뀌면 1페이지로
  useEffect(() => {
    setPage(1);
  }, [stockName, memoSearch]);

  const totalPage = Math.ceil(list.length / PAGE_SIZE);

  const pagedList = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return {
    list: pagedList,
    totalCount: list.length,
    page,
    setPage,
    totalPage,
    refetch: fetchData,
  };
};
