import { useStockList } from "@/features/stock/model/useStockList";
import { useStockForm } from "@/features/stock/model/useStockForm";

import { StockItemProps } from "@/features/stock/model";

interface StockTableProps {
  selectedStock: string;
}

export const StockTable = ({ selectedStock }: StockTableProps) => {
  const { list } = useStockList(selectedStock);

  const {
    setEditId,
    setStockName,
    setBuyPrice,
    setCurrentPrice,
    setQuantity,
    setMemo,
  } = useStockForm();

  if (!selectedStock) {
    return <div>종목을 선택해주세요.</div>;
  }

  return (
    <div>
      {/* 헤더 */}
      <div>
        <span>날짜</span>
        <span>현재가</span>
        <span>차액</span>
        <span>수익</span>
        <span>수익률</span>
        <span>총자산</span>
        <span>메모</span>
        <span>수정</span>
      </div>

      {/* 리스트 */}
      {list.map((item: StockItemProps) => (
        <div key={item.id}>
          <span>{item.created_date}</span>
          <span>{item.current_price}</span>
          <span>{item.current_price - item.buy_price}</span>
          <span>{item.profit}</span>
          <span>{item.profit_rate}%</span>
          <span>{item.total_asset}</span>
          <span>{item.memo}</span>

          <button
            onClick={() => {
              setEditId(item.id);

              setStockName(item.stock_name);
              setBuyPrice(item.buy_price);
              setCurrentPrice(item.current_price);
              setQuantity(item.quantity);
              setMemo(item.memo);
            }}
          >
            수정
          </button>
        </div>
      ))}
    </div>
  );
};
