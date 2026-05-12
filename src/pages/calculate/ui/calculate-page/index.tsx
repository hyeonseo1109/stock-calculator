import { useStockForm } from "@/features/stock/model";
import { StockForm, StockTable } from "@/widgets/stock/ui";
import { useState } from "react";

export const CalculatePage = () => {
  const [selectedStock, setSelectedStock] = useState("");

  const form = useStockForm();

  return (
    <>
      <StockForm
        {...form}
        selectedStock={selectedStock}
        setSelectedStock={setSelectedStock}
      />

      <StockTable {...form} selectedStock={selectedStock} />
    </>
  );
};
