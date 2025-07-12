import styles from "./NotificationManageCard.module.css";

function NotificationManageCard({ messageData, onActionClick }) {
  const { title, description, iconUrl, actions } = messageData;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={iconUrl} alt="icon" className={styles.icon} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.actions}>
        {actions.map((action, i) => (
          <span
            key={i}
            className={styles.action}
            onClick={() => onActionClick?.(action)}
          >
            {action}
          </span>
        ))}
      </div>
    </div>
  );
}

export default NotificationManageCard;
