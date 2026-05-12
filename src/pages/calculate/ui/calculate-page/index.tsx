import { StockForm, StockTable } from "@/widgets/stock/ui";
import { useState } from "react";

export const CalculatePage = () => {
  const [selectedStock, setSelectedStock] = useState("");

  return (
    <>
      <StockForm
        selectedStock={selectedStock}
        setSelectedStock={setSelectedStock}
      />

      <StockTable selectedStock={selectedStock} />
    </>
  );
};
