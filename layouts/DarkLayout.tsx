import { FC, PropsWithChildren } from "react";
import styles from "../styles/Home.module.css";

export const DarkLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles["dark-layout"]}>
      <h3>Dark-layout</h3>
      <div>{children}</div>
    </div>
  );
};
