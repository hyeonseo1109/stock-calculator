import * as styles from "./style.css";

export const Main = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.leftBox}>
        <p className={styles.descriptionText}>
          주식 투자에 필요한 다양한 계산기를 제공하여 투자 결정을 돕는 웹
          애플리케이션입니다. 주식 수익률 계산기, 배당 수익률 계산기, 손익분기점
          계산기 등 다양한 도구를 통해 투자 전략을 세우고 분석할 수 있습니다.
          사용자 친화적인 인터페이스와 정확한 계산 결과로 투자자들이 보다 현명한
          결정을 내릴 수 있도록 지원합니다.
        </p>
        <div className={styles.accountBox}>
          <a href="sign-up-page">계정 만들기 &nbsp;→</a>
        </div>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.mainTitleBox}>
          <h1 className={styles.mainTitle}>안녕하세요!</h1>
          <p className={styles.mainText}>
            주종목계산기에 오신 것을 환영합니다.
          </p>
        </div>
        <a href="main-page" className={styles.startButton}>
          시작하기
        </a>
      </div>
    </div>
  );
};
