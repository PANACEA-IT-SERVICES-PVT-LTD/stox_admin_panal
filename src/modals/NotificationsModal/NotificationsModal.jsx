import styles from "./NotificationsModal.module.css";
import ToClose from "../../components/ToClose/ToClose";
import { useSelector } from "react-redux";

function NotificationsModal() {
  const { notifications = [] } = useSelector((state) => state.modal.data || {});

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Notifications</h2>
          <ToClose />
        </div>

        {notifications.map((notif, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardLeft}>
              <img src={notif.imageUrl} className={styles.avatar} alt="notif" />
              <div className={styles.textContent}>
                <div className={styles.title}>{notif.title}</div>
                <div className={styles.description}>{notif.message}</div>
              </div>
            </div>

            <div className={styles.timestamp}>{notif.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsModal;
