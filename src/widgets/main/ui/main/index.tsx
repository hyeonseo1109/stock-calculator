import { useEffect, useState } from "react";
import { getCurrentUser } from "@/features/auth/api";
import * as styles from "./style.css";

export const Main = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getCurrentUser();
      if (user) {
        setEmail(user.email ?? "");
        setIsLoggedIn(true);
      }
    };
    loadUser();
  }, []);

  return (
    <main className={styles.main}>
      {/* 인삿말 */}
      <div className={styles.heroSection}>
        <p className={styles.greeting}>
          {isLoggedIn ? `${email.split("@")[0]}님, 안녕하세요!` : "안녕하세요!"}
        </p>
        <h1 className={styles.title}>주식 수익 계산기</h1>
        <p className={styles.subtitle}>
          주식 수익 계산기에 오신 것을 환영합니다
        </p>

        <a
          href={isLoggedIn ? "/calculate-page" : "/login-page"}
          className={styles.startButton}
        >
          {isLoggedIn ? "계산 화면으로 →" : "시작하기 →"}
        </a>
      </div>

      {/* 설명 + 계정 만들러가기 */}
      <div className={styles.cardRow}>
        <div className={styles.card}>
          <p className={styles.cardTitle}>무엇을 할 수 있나요?</p>
          <p className={styles.cardText}>
            주식 투자에 필요한 다양한 계산 기능을 제공하여 투자 결정을 돕는 웹
            애플리케이션입니다. 같은 종목에 대해 여러 가격을 입력해 서로 다른
            조건에서의 수익을 비교하고 계산해볼 수 있습니다. 또한 사용자가
            가격과 메모를 자유롭게 입력하고 저장할 수 있으며, 종목이나 메모
            기준으로 검색하여 원하는 데이터만 모아 볼 수 있습니다.
          </p>
        </div>

        {!isLoggedIn && (
          <div className={styles.card}>
            <p className={styles.cardTitle}>지금 시작하세요</p>
            <p className={styles.cardText}>
              계정을 만들고 나만의 주식 포트폴리오를 관리해보세요. 무료로 시작할
              수 있습니다.
            </p>
            <a href="/sign-up-page" className={styles.signUpButton}>
              계정 만들러 가기 →
            </a>
          </div>
        )}
      </div>
    </main>
  );
};
