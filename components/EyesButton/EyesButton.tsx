import React from "react";
import styles from "../../styles/Button.module.scss";
import { IC_HIDE, IC_SHOW } from "../../assets/index";
interface props {
  onClick: () => void;
  visible: boolean;
}
export default function EyesButton({ onClick, visible }: props) {
  return (
    <>
      <button
        className={styles.show_pass}
        onClick={() => onClick()}
        type="button"
      >
        {visible ? <IC_SHOW /> : <IC_HIDE />}
      </button>
    </>
  );
}
