import { Main } from "@/widgets/main/ui";
import { Header } from "@/widgets/header/ui";
import * as styles from "./style.css";

export const MainPage = () => {
  return (
    <div className={styles.mainPageBackground}>
      <Header />
      <Main />
    </div>
  );
};
