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
            주식 투자에 필요한 다양한 계산기를 제공하여 투자 결정을 돕는 웹
            애플리케이션입니다. 수익률 계산기, 손익분기점 계산기 등 다양한
            도구를 통해 투자 전략을 세우고 분석할 수 있습니다.
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
