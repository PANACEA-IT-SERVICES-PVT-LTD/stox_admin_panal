import React from "react";
import styles from "./RevenueOverviewCard.module.css";

const RevenueOverviewCard = ({ title, value, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
        <div className={styles.amount}>
          <p className={styles.value}>INR {value}</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.right}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RevenueOverviewCard;
