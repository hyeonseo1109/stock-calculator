import { useStockForm } from "@/features/stock/model";
import { StockForm, StockTable } from "@/widgets/stock/ui";
import { Header } from "@/widgets/header/ui";
import { useState, useRef } from "react";
import * as styles from "./style.css";

export const CalculatePage = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const [refetchTrigger, setRefetchTrigger] = useState(0);
  const [memoSearch, setMemoSearch] = useState("");
  const [page, setPage] = useState(0); // 0: 입력, 1: 표

  const form = useStockForm();

  // 드래그/스와이프
  const dragStartX = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const endX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (diff > 50 && page === 0) setPage(1);
    if (diff < -50 && page === 1) setPage(0);
    dragStartX.current = null;
  };

  return (
    <div className={styles.pageWrapper}>
      <Header variant="light" />

      {/* 데스크탑 */}
      <div className={styles.inner}>
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
            memoSearch={memoSearch}
            setMemoSearch={setMemoSearch}
          />
        </div>
      </div>

      {/* 모바일 슬라이더 */}
      <div
        className={styles.mobileSliderWrapper}
        ref={sliderRef}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
      >
        <div
          className={styles.mobileSlider}
          style={{ transform: `translateX(${page === 0 ? "0%" : "-100%"})` }}
        >
          {/* 화면 1: 입력 폼 */}
          <div className={styles.mobilePage}>
            <StockForm
              {...form}
              selectedStock={selectedStock}
              setSelectedStock={setSelectedStock}
              onSaved={() => {
                setRefetchTrigger((prev) => prev + 1);
                setPage(1); // 저장 후 자동으로 표 화면으로
              }}
            />
          </div>

          {/* 화면 2: 표 */}
          <div className={styles.mobilePage}>
            <StockTable
              {...form}
              selectedStock={selectedStock}
              refetchTrigger={refetchTrigger}
              memoSearch={memoSearch}
              setMemoSearch={setMemoSearch}
            />
          </div>
        </div>

        {/* 페이지네이션 */}
        <div className={styles.pagination}>
          <button
            className={`${styles.pageBtn} ${page === 0 ? styles.pageBtnDisabled : ""}`}
            onClick={() => setPage(0)}
            disabled={page === 0}
          >
            ◀
          </button>
          <span className={styles.pageIndicator}>
            {page === 0 ? "입력" : "기록"}
          </span>
          <button
            className={`${styles.pageBtn} ${page === 1 ? styles.pageBtnDisabled : ""}`}
            onClick={() => setPage(1)}
            disabled={page === 1}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};
