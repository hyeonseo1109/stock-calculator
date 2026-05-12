import { supabase } from "@/shared/api";
import { StockItemProps } from "@/features/stock/model";
import { getKSTDateString } from "@/widgets/stock/util";

export const duplicateStock = async (item: StockItemProps) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const today = getKSTDateString();

  const totalBuy = item.buy_price * item.quantity;

  const profit = (item.current_price - item.buy_price) * item.quantity;

  const profitRate = totalBuy
    ? Number(((profit / totalBuy) * 100).toFixed(2))
    : 0;

  const totalAsset = totalBuy + profit;

  const { error } = await supabase.from("stock").insert({
    user_id: user.id,

    stock_name: item.stock_name,
    created_date: today,

    buy_price: item.buy_price,
    current_price: item.current_price,
    quantity: item.quantity,

    memo: item.memo,

    total_buy: totalBuy,
    profit,
    profit_rate: profitRate,
    total_asset: totalAsset,

    is_favorite: item.is_favorite,
  });

  if (error) {
    console.error(error);
    alert("복제 실패");
  }
};
