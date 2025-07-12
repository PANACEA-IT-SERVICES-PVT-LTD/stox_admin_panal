import React from "react";
import styles from "./ContestCard.module.css";
import { FiLock } from "react-icons/fi";
import coin from "../../assets/coin.png";
import crown from "../../assets/crown.png";

const ContestCard = ({
  price = 80,
  entry = "50rs",
  timeLeft = "2 : 00 : 34 sec Left",
  timeSlot = "Friday 9:30am to 3:30pm",
  leftSpots = 1,
  totalSpots = 2,
  winAmount = "80rs",
  winPercentage = "50%",
  isDisabled = false,
  onJoin,
  onEdit,
  onDisable,
  onDelete,
}) => {
  const progressPercent = ((totalSpots - leftSpots) / totalSpots) * 100;

  return (
    <div className={styles.cardWrapper}>
      {/* Card itself */}
      <div className={`${styles.card} ${isDisabled ? styles.disabled : ""}`}>
        {/* Entry Fee Pill */}
        <div className={styles.entryTag}>{entry}</div>

        {/* Overlay if disabled */}
        {isDisabled && (
          <div className={styles.overlay}>
            <FiLock size={20} />
            <span>Disabled</span>
          </div>
        )}

        {/* Header */}
        <div className={styles.header}>
          <span>
            <strong>{price}</strong> INR{" "}
            <span className={styles.subText}>Price Pool</span>
          </span>
        </div>
        <div className={styles.insidecontent}>
          {/* Time Info */}
          <div className={styles.timeRow}>
            <span className={styles.timeLeft}>{timeLeft}</span>
            <span className={styles.timeSlot}>{timeSlot}</span>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressBar}>
            <div
              className={styles.filled}
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          {/* Spots Info */}
          <div className={styles.spots}>
            <span>{leftSpots} Left</span>
            <span>{totalSpots} spots</span>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.info}>
            <img src={coin} alt="coin" />
            <span>{winAmount}</span>
          </div>
          <div className={styles.info}>
            <img src={crown} alt="crown" />
            <span>{winPercentage}</span>
          </div>
          <span className={styles.leaderboardLink} onClick={onJoin}>
            View Leaderboard
          </span>
        </div>
      </div>

      {/* 🔻 Actions OUTSIDE the card */}
      <div className={styles.actions}>
        <span onClick={onEdit}>Edit</span>
        <span onClick={onDisable}>{isDisabled ? "Enable" : "Disable"}</span>
        <span onClick={onDelete}>Delete</span>
      </div>
    </div>
  );
};

export default ContestCard;
