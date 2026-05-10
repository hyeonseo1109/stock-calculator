import { useStockForm } from "@/features/stock/model/useStockForm";
import * as styles from "./style.css";
import { Button, Input } from "@/entities/stock/ui";

export const StockForm = () => {
  const {
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
  } = useStockForm();

  return (
    <div>
      <Input
        placeholder="매수가"
        type="number"
        value={buyPrice}
        onChange={(e) => setBuyPrice(Number(e.target.value))}
      />

      <Input
        placeholder="현재가"
        type="number"
        value={currentPrice}
        onChange={(e) => setCurrentPrice(Number(e.target.value))}
      />

      <Input
        placeholder="수량"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <Input
        placeholder="메모"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />

      <Button text="저장" onClick={handleSave} />

      <div>
        <p>수익: {result.profit}</p>
        <p>수익률: {result.profitRate}%</p>
        <p>총자산: {result.totalAsset}</p>
      </div>
    </div>
  );
};
