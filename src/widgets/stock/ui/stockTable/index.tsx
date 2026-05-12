import { useEffect } from "react";
import { useStockList } from "@/features/stock/model/useStockList";
import { StockItemProps } from "@/features/stock/model";
import {
  deleteStock,
  toggleFavorite,
  duplicateStock,
} from "@/features/stock/api";
import { mmdd as formatdate } from "@/widgets/stock/util";
import * as styles from "./style.css";

interface StockTableProps {
  selectedStock: string;
  setSelectedStock: (value: string) => void;
  refetchTrigger: number;
  memoSearch: string;
  setMemoSearch: (value: string) => void;
  setEditId: (id: string) => void;
  setStockName: (name: string) => void;
  setBuyPrice: (price: number) => void;
  setCurrentPrice: (price: number) => void;
  setQuantity: (quantity: number) => void;
  setMemo: (memo: string) => void;
  moveToFormPage?: () => void;
}

const formatNumber = (n: number) => n.toLocaleString();

export const StockTable = ({
  selectedStock,
  refetchTrigger,
  memoSearch,
  setMemoSearch,
  setEditId,
  setStockName,
  setBuyPrice,
  setCurrentPrice,
  setQuantity,
  setMemo,
  setSelectedStock,
  moveToFormPage,
}: StockTableProps) => {
  const { list, refetch, page, setPage, totalPage } = useStockList(
    selectedStock,
    memoSearch,
  );

  useEffect(() => {
    if (refetchTrigger > 0) refetch();
  }, [refetchTrigger]);

  return (
    <div className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <span className={styles.tableTitle}>
          {selectedStock ? selectedStock : "전체보기"}
        </span>

        <input
          className={styles.searchInput}
          placeholder="메모 검색..."
          value={memoSearch}
          onChange={(e) => setMemoSearch(e.target.value)}
          onCompositionUpdate={(e) =>
            setMemoSearch((e.target as HTMLInputElement).value)
          }
        />
      </div>

      {list.length === 0 ? (
        <p className={styles.emptyMessage}>
          {memoSearch ? "검색 결과가 없습니다." : "저장된 데이터가 없습니다."}
        </p>
      ) : (
        <>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>★</th>

                  {!selectedStock && <th className={styles.th}>종목</th>}

                  <th className={styles.th}>날짜</th>
                  <th className={styles.th}>현재가</th>
                  <th className={styles.th}>차액</th>
                  <th className={styles.th}>수익</th>
                  <th className={styles.th}>수익률</th>
                  <th className={styles.th}>총자산</th>
                  <th className={`${styles.th} ${styles.thMemo}`}>메모</th>
                  <th className={styles.th}></th>
                </tr>
              </thead>

              <tbody>
                {list.map((item: StockItemProps) => {
                  const diff = item.current_price - item.buy_price;

                  const isPos = item.profit >= 0;

                  return (
                    <tr key={item.id} className={styles.tr}>
                      <td className={styles.td}>
                        <button
                          className={styles.favoriteBtn}
                          onClick={async () => {
                            await toggleFavorite(item.id, item.is_favorite);

                            refetch();
                          }}
                        >
                          <p
                            className={
                              item.is_favorite
                                ? styles.favoriteActive
                                : styles.favoriteInactive
                            }
                          >
                            ★
                          </p>
                        </button>
                      </td>

                      {!selectedStock && (
                        <td className={styles.td}>
                          <span className={styles.stockBadge}>
                            {item.stock_name}
                          </span>
                        </td>
                      )}

                      <td className={styles.td}>
                        {formatdate(item.created_date)}
                      </td>

                      <td className={styles.td}>
                        {formatNumber(item.current_price)}
                      </td>

                      <td
                        className={`${styles.td} ${
                          diff >= 0 ? styles.pos : styles.neg
                        }`}
                      >
                        {diff >= 0 ? "+" : ""}
                        {formatNumber(diff)}
                      </td>

                      <td
                        className={`${styles.td} ${
                          isPos ? styles.pos : styles.neg
                        }`}
                      >
                        {isPos ? "+" : ""}
                        {formatNumber(item.profit)}
                      </td>

                      <td
                        className={`${styles.td} ${
                          isPos ? styles.pos : styles.neg
                        }`}
                      >
                        {isPos ? "+" : ""}
                        {item.profit_rate}%
                      </td>

                      <td className={styles.td}>
                        {formatNumber(item.total_asset)}
                      </td>

                      <td className={`${styles.td} ${styles.tdMemo}`}>
                        {item.memo}
                      </td>

                      <td className={styles.td}>
                        <div className={styles.actionButtons}>
                          <button
                            className={styles.editButton}
                            onClick={() => {
                              setEditId(item.id);
                              setStockName(item.stock_name);
                              setSelectedStock(item.stock_name);
                              setBuyPrice(item.buy_price);
                              setCurrentPrice(item.current_price);
                              setQuantity(item.quantity);
                              setMemo(item.memo);
                              moveToFormPage?.();
                            }}
                          >
                            수정
                          </button>

                          <button
                            className={styles.copyButton}
                            onClick={async () => {
                              await duplicateStock(item);

                              refetch();
                            }}
                          >
                            복제
                          </button>

                          <button
                            className={styles.deleteButton}
                            onClick={async () => {
                              if (!confirm("삭제하시겠습니까?")) return;

                              await deleteStock(item.id);

                              refetch();
                            }}
                          >
                            삭제
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          {totalPage > 1 && (
            <div className={styles.pagination}>
              <button
                className={styles.pageButton}
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                이전
              </button>

              {Array.from({
                length: totalPage,
              }).map((_, idx) => {
                const pageNumber = idx + 1;

                return (
                  <button
                    key={pageNumber}
                    className={
                      page === pageNumber
                        ? styles.activePageButton
                        : styles.pageButton
                    }
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                className={styles.pageButton}
                disabled={page === totalPage}
                onClick={() => setPage(page + 1)}
              >
                다음
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
