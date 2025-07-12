import styles from "./ActivityPageCard.module.css";

const ActivityPageCard = ({ iconUrl, title, description, date, time }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.iconWrapper}>
            <img src={iconUrl} alt="icon" className={styles.iconImage} />
          </div>
          <div className={styles.text}>
            <div className={styles.title}>{title}</div>
            <div className={styles.inlineDescription}>
              {description} <span className={styles.date}>{date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.time}>{time}</div>
    </div>
  );
};

export default ActivityPageCard;
