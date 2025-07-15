import styles from "./ViewPanDetails.module.css";
import Button from "../../components/Button/Button";
import ToClose from "../../components/ToClose/ToClose";
import panDefaultImage from './../../assets/panDefaultImage.png'
import { useSelector } from "react-redux";

function ViewPanDetails() {


  const {name , dateOfBirth , panNumber ,imageLabel , imageUrl = panDefaultImage} = useSelector(state => state.modal.data) ;
  
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.ViewPanDetails}>
        <div className={styles.header}>
          <h2>PAN Details</h2>
          <ToClose />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Name</label>
          <input type="text" className={styles.input} value={name} disabled />
        </div>

        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>DOB</label>
            <input
              type="text"
              className={styles.input}
              value={dateOfBirth}
              disabled
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>PAN NUMBER</label>
            <input
              type="text"
              className={styles.input}
              placeholder=""
              value={panNumber}
              disabled
            />
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={imageUrl} alt="PAN" className={styles.image} />
          <div className={styles.imageLabel}>{imageLabel}</div>
        </div>
      </div>
    </div>
  );
}

export default ViewPanDetails;
