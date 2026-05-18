import { useStockForm } from "@/features/stock/model";
import { StockForm, StockTable } from "@/widgets/stock/ui";
import { Header } from "@/widgets/header/ui";
import { useState, useRef } from "react";
import * as styles from "./style.css";

export const CalculatePage = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const [refetchTrigger, setRefetchTrigger] = useState(0);
  const [memoSearch, setMemoSearch] = useState("");
  const [page, setPage] = useState(0);

  const form = useStockForm();

  const dragStartX = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const isPageSwipe = useRef(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveToFormPage = () => setPage(0);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    dragStartX.current = clientX;
    dragStartY.current = clientY;

    const windowHeight = window.innerHeight;
    isPageSwipe.current = clientY > windowHeight * 0.8;
  };

  const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStartX.current === null || !isPageSwipe.current) {
      dragStartX.current = null;
      dragStartY.current = null;
      isPageSwipe.current = false;
      return;
    }

    const endX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;

    const diff = dragStartX.current - endX;

    if (diff > 50 && page === 0) setPage(1);
    if (diff < -50 && page === 1) setPage(0);

    dragStartX.current = null;
    dragStartY.current = null;
    isPageSwipe.current = false;
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
            onSaved={() => setRefetchTrigger((p) => p + 1)}
          />

          <StockTable
            {...form}
            selectedStock={selectedStock}
            setSelectedStock={setSelectedStock}
            refetchTrigger={refetchTrigger}
            memoSearch={memoSearch}
            setMemoSearch={setMemoSearch}
            moveToFormPage={moveToFormPage}
          />
        </div>
      </div>

      {/* 모바일 */}
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
          {/* 입력 */}
          <div className={styles.mobilePage}>
            <StockForm
              {...form}
              selectedStock={selectedStock}
              setSelectedStock={setSelectedStock}
              onSaved={() => {
                setRefetchTrigger((p) => p + 1);
                setPage(1);
              }}
            />
          </div>

          {/* 리스트 */}
          <div className={styles.mobilePage}>
            <StockTable
              {...form}
              selectedStock={selectedStock}
              setSelectedStock={setSelectedStock}
              refetchTrigger={refetchTrigger}
              memoSearch={memoSearch}
              setMemoSearch={setMemoSearch}
              moveToFormPage={moveToFormPage}
            />
          </div>
        </div>

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
