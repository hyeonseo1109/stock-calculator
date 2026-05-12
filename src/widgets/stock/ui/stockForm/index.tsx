import { useStockNames } from "@/features/stock/model/useStockNames";
import { DropDown } from "@/entities/stock/ui/dropdown";
import * as styles from "./style.css";

interface StockFormProps {
  selectedStock: string;
  setSelectedStock: (value: string) => void;
  onSaved: () => void;
  stockName: string;
  setStockName: (value: string) => void;
  buyPrice: number;
  setBuyPrice: (value: number) => void;
  currentPrice: number;
  setCurrentPrice: (value: number) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  memo: string;
  setMemo: (value: string) => void;
  handleSave: () => Promise<void>;
  result: { profit: number; profitRate: number; totalAsset: number };
}

export const StockForm = ({
  selectedStock,
  setSelectedStock,
  onSaved,
  stockName,
  setStockName,
  buyPrice,
  setBuyPrice,
  currentPrice,
  setCurrentPrice,
  quantity,
  setQuantity,
  memo,
  setMemo,
  handleSave,
  result,
}: StockFormProps) => {
  const { names, refetch } = useStockNames();

  return (
    <div className={styles.formWrapper}>
      {/* 종목 추가 input */}
      <div className={styles.section}>
        <label className={styles.label}>종목 추가</label>
        <input
          className={styles.input}
          placeholder="종목 이름 직접 입력"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
        />
      </div>

      {/* 드롭다운 */}
      <div className={styles.section}>
        <label className={styles.label}>종목 선택</label>
        <DropDown
          placeholder="저장된 종목 선택"
          value={stockName}
          options={names.map((name) => ({ text: name }))}
          onSelect={(value) => {
            setStockName(value);
            setSelectedStock(value);
          }}
        />
      </div>

      <div className={styles.divider} />

      {/* 필수값 3개 */}
      <div className={styles.section}>
        <label className={styles.label}>매수가</label>
        <input
          className={styles.input}
          placeholder="매수가"
          type="number"
          value={buyPrice}
          onChange={(e) => setBuyPrice(Number(e.target.value))}
        />
      </div>

      <div className={styles.section}>
        <label className={styles.label}>현재가</label>
        <input
          className={styles.input}
          placeholder="현재가"
          type="number"
          value={currentPrice}
          onChange={(e) => setCurrentPrice(Number(e.target.value))}
        />
      </div>

      <div className={styles.section}>
        <label className={styles.label}>수량</label>
        <input
          className={styles.input}
          placeholder="수량"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      {/* 메모 */}
      <div className={styles.section}>
        <label className={styles.label}>메모</label>
        <input
          className={styles.input}
          placeholder="메모 (선택)"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
      </div>

      {/* 저장 버튼 */}
      <button
        className={styles.saveButton}
        onClick={async () => {
          await handleSave();
          await refetch();
          setSelectedStock(stockName);
          onSaved();
        }}
      >
        저장
      </button>

      <div className={styles.divider} />

      {/* 계산 결과 */}
      <div className={styles.section}>
        <p className={styles.resultLabel}>계산 결과</p>
        <div className={styles.resultBox}>
          <div className={styles.resultItem}>
            <span className={styles.resultKey}>수익</span>
            <span
              className={
                result.profit >= 0
                  ? styles.resultValuePos
                  : styles.resultValueNeg
              }
            >
              {result.profit.toLocaleString()}원
            </span>
          </div>
          <div className={styles.resultDivider} />
          <div className={styles.resultItem}>
            <span className={styles.resultKey}>수익률</span>
            <span
              className={
                result.profitRate >= 0
                  ? styles.resultValuePos
                  : styles.resultValueNeg
              }
            >
              {result.profitRate}%
            </span>
          </div>
          <div className={styles.resultDivider} />
          <div className={styles.resultItem}>
            <span className={styles.resultKey}>총자산</span>
            <span className={styles.resultValueNeutral}>
              {result.totalAsset.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
