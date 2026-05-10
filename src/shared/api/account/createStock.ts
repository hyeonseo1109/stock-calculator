import { supabase } from "@/shared/api";

type CreateStockParams = {
  stockName: string;
  buyPrice: number;
  currentPrice: number;
  quantity: number;
  memo?: string;
};

export const createStock = async ({
  stockName,
  buyPrice,
  currentPrice,
  quantity,
  memo,
}: CreateStockParams) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    throw new Error("로그인이 필요합니다.");
  }

  const { data, error } = await supabase
    .from("stock")
    .insert({
      user_id: session.user.id,

      stock_name: stockName,

      buy_price: buyPrice,

      current_price: currentPrice,

      quantity,

      memo,
    })
    .select();

  if (error) {
    throw error;
  }

  return data;
};
