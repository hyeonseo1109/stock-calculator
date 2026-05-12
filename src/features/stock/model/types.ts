export interface StockItemProps {
  id: string;
  stock_name: string;
  created_date: string;
  current_price: number;
  buy_price: number;
  quantity: number;
  profit: number;
  profit_rate: number;
  total_asset: number;
  memo: string;
  is_favorite: boolean;
}
