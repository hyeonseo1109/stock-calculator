import { useStockForm } from "@/features/stock/model";
import { StockForm, StockTable } from "@/widgets/stock/ui";
import { Header } from "@/widgets/header/ui";
import { useState } from "react";
import * as styles from "./style.css";

export const CalculatePage = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  const form = useStockForm();

  return (
    <div className={styles.pageWrapper}>
      <Header variant="light" />
      <div className={styles.inner}>
        {/* <h1 className={styles.pageTitle}>주식 계산기</h1> */}
        <div className={styles.contentArea}>
          <StockForm
            {...form}
            selectedStock={selectedStock}
            setSelectedStock={setSelectedStock}
            onSaved={() => setRefetchTrigger((prev) => prev + 1)}
          />
          <StockTable
            {...form}
            selectedStock={selectedStock}
            refetchTrigger={refetchTrigger}
          />
        </div>
      </div>
    </div>
  );
};
