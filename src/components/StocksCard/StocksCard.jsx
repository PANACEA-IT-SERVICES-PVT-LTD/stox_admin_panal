import React from "react";
import styles from "./StocksCard.module.css";

const StocksCard = ({ avatar, title, subtitle, isSelected, onSelect }) => {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <div className={styles.left}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>

      <div className={styles.radioIndicator}>
        <div
          className={`${styles.circle} ${isSelected ? styles.filled : ""}`}
        />
      </div>
    </div>
  );
};

export default StocksCard;
