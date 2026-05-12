import { useState } from "react";
import { supabase } from "@/shared/api";
import { upsertStock } from "../api";

export const useStockForm = () => {
  const [stockName, setStockName] = useState("");
  const [buyPrice, setBuyPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [memo, setMemo] = useState("");

  const calculate = () => {
    const totalBuy = buyPrice * quantity;

    const profit = (currentPrice - buyPrice) * quantity;

    const profitRate = totalBuy
      ? Number(((profit / totalBuy) * 100).toFixed(2))
      : 0;

    const totalAsset = totalBuy + profit;

    return {
      totalBuy,
      profit,
      profitRate,
      totalAsset,
    };
  };

  const handleSave = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { totalBuy, profit, profitRate, totalAsset } = calculate();

    await upsertStock({
      userId: user.id,
      stockName,
      createdDate: new Date().toISOString().slice(0, 10),
      buyPrice,
      currentPrice,
      quantity,
      memo,
      totalBuy,
      profit,
      profitRate,
      totalAsset,
    });
  };

  const result = calculate();

  return {
    stockName,
    setStockName,

    buyPrice,
    currentPrice,
    quantity,
    memo,

    setBuyPrice,
    setCurrentPrice,
    setQuantity,
    setMemo,

    handleSave,

    result,
  };
};
