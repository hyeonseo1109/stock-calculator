import { useStockForm } from "@/features/stock/model/useStockForm";
import { useStockNames } from "@/features/stock/model/useStockNames";
import * as styles from "./style.css";
import { Button, Input } from "@/entities/stock/ui";
import { DropDown } from "@/entities/stock/ui/dropdown";

interface StockFormProps {
  selectedStock: string;
  setSelectedStock: (value: string) => void;
}

export const StockForm = ({
  selectedStock,
  setSelectedStock,
}: StockFormProps) => {
  const { names, refetch } = useStockNames();

  const {
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
  } = useStockForm();

  return (
    <div>
      <Input
        placeholder="종목 추가"
        value={stockName}
        onChange={(e) => setStockName(e.target.value)}
      />

      <DropDown
        placeholder="종목 선택"
        value={stockName}
        options={names.map((name) => ({
          text: name,
        }))}
        onSelect={(value) => {
          setStockName(value);
          setSelectedStock(value);
        }}
      />

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

      <Button
        text="저장"
        onClick={async () => {
          await handleSave();
          await refetch();
          setSelectedStock(stockName);
        }}
      />

      <div>
        <p>수익: {result.profit}</p>
        <p>수익률: {result.profitRate}%</p>
        <p>총자산: {result.totalAsset}</p>
      </div>
    </div>
  );
};
