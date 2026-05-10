import { supabase } from "@/shared/api";

export const upsertStock = async ({
  userId,
  stockName,
  createdDate,
  buyPrice,
  currentPrice,
  quantity,
  memo,
  totalBuy,
  profit,
  profitRate,
  totalAsset,
}: any) => {
  const { error } = await supabase.from("stock").upsert({
    user_id: userId,
    stock_name: stockName,
    created_date: createdDate,
    buy_price: buyPrice,
    current_price: currentPrice,
    quantity,
    memo,
    total_buy: totalBuy,
    profit,
    profit_rate: profitRate,
    total_asset: totalAsset,
  });

  if (error) throw error;
};
