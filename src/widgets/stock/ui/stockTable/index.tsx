import { useStockList } from "@/features/stock/model/useStockList";
import * as styles from "./style.css";
import { StockItemProps } from "@/features/stock/model";

interface StockTableProps {
  selectedStock: string;
}

export const StockTable = ({ selectedStock }: StockTableProps) => {
  const { list } = useStockList(selectedStock);

  if (!selectedStock) {
    return <div>종목을 선택해주세요.</div>;
  }

  return (
    <div>
      <div>
        <span>날짜</span>
        <span>현재가</span>
        <span>차액</span>
        <span>수익</span>
        <span>수익률</span>
        <span>총자산</span>
        <span>메모</span>
      </div>

      {list.map((item: StockItemProps) => (
        <div key={item.id}>
          <span>{item.created_date}</span>
          <span>{item.current_price}</span>
          <span>{item.current_price - item.buy_price}</span>
          <span>{item.profit}</span>
          <span>{item.profit_rate}%</span>
          <span>{item.total_asset}</span>
          <span>{item.memo}</span>
        </div>
      ))}
    </div>
  );
};
