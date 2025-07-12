import styles from "./ReportsCard.module.css";
import Button from "../Button/Button";

function ReportsCard({ title, onExport }) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <Button onClick={onExport}>Export</Button>
    </div>
  );
}

export default ReportsCard;
