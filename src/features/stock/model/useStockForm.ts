import { useState } from "react";
import { supabase } from "@/shared/api";

export const useStockForm = () => {
  const [stockName, setStockName] = useState("");
  const [buyPrice, setBuyPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [memo, setMemo] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const calculate = () => {
    const totalBuy = buyPrice * quantity;
    const profit = (currentPrice - buyPrice) * quantity;
    const profitRate = totalBuy
      ? Number(((profit / totalBuy) * 100).toFixed(2))
      : 0;
    const totalAsset = totalBuy + profit;
    return { totalBuy, profit, profitRate, totalAsset };
  };

  const handleSave = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { totalBuy, profit, profitRate, totalAsset } = calculate();
    const today = new Date().toISOString().slice(0, 10);

    // editId가 없을 때 → 오늘 날짜 + 같은 종목 행이 있는지 먼저 확인
    let resolvedId = editId;

    if (!resolvedId) {
      const { data: existing } = await supabase
        .from("stock")
        .select("id")
        .eq("user_id", user.id)
        .eq("stock_name", stockName)
        .eq("created_date", today)
        .maybeSingle();

      if (existing) {
        resolvedId = existing.id;
      }
    }

    await supabase.from("stock").upsert({
      ...(resolvedId ? { id: resolvedId } : {}),
      user_id: user.id,
      stock_name: stockName,
      created_date: today,
      buy_price: buyPrice,
      current_price: currentPrice,
      quantity,
      memo,
      total_buy: totalBuy,
      profit,
      profit_rate: profitRate,
      total_asset: totalAsset,
    });

    setEditId(null);
  };

  const result = calculate();

  return {
    stockName,
    setStockName,
    buyPrice,
    setBuyPrice,
    currentPrice,
    setCurrentPrice,
    quantity,
    setQuantity,
    memo,
    setMemo,
    handleSave,
    result,
    editId,
    setEditId,
  };
};
