import styles from "./Card.module.css";
import clsx from "clsx";

function Card({
  className = "",
  status = "active", // 'active' | 'disabled' | 'maintenance'
  contest = {},
}) {
  const isDisabled = status === "disabled";
  const isMaintenance = status === "maintenance";

  return (
    <div
      className={clsx(styles.Card, className, {
        [styles.disabled]: isDisabled,
        [styles.maintenance]: isMaintenance,
      })}
    >
      {isMaintenance ? (
        <>
          <div className={styles.icon}>🛠️</div>
          <h3 className={styles.title}>Sorry there are contests today</h3>
          <p className={styles.message}>
            You may experience some issues in this area because updates are
            being made. We will notify you as soon as everything has been fixed.
          </p>
          <div className={styles.actions}>
            <span>Edit</span>
            <span className={styles.disabledText}>Disable</span>
            <span>Delete</span>
          </div>
        </>
      ) : (
        <>
          <div className={styles.header}>
            <strong>{contest.price} INR</strong> Price Pool
            <div className={styles.badge}>{contest.entryFee}rs</div>
          </div>

          <div className={styles.timer}>
            <span>{contest.timeLeft}</span>
            <span>{contest.schedule}</span>
          </div>

          <div className={styles.progressWrapper}>
            <div
              className={styles.progress}
              style={{ width: `${contest.progress || 0}%` }}
            />
          </div>

          <div className={styles.spots}>
            <span>{contest.spotsLeft} Left</span>
            <span>{contest.totalSpots} spots</span>
          </div>

          <div className={styles.stats}>
            <span>🏆 {contest.reward}rs</span>
            <span>🎯 {contest.winPercent}%</span>
            <span className={styles.link}>View Leaderboard</span>
          </div>

          {isDisabled && (
            <div className={styles.overlay}>
              <span className={styles.lock}>🔒</span>
              <span>Disabled</span>
            </div>
          )}

          <div className={styles.actions}>
            <span>Edit</span>
            <span>{isDisabled ? "Enable" : "Disable"}</span>
            <span>Delete</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
