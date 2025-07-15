import React from "react";
import styles from "./SimpleActionModal.module.css";
import ToClose from "../../components/ToClose/ToClose";
import Button from "../../components/Button/Button";

const SimpleActionModal = ({
  title,
  children, // form fields like dropdown or input
  primaryActionLabel = "Save",
  secondaryActionLabel = "Cancel",
  onPrimaryAction,
  onSecondaryAction,
}) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <ToClose />
        </div>

        {children}

        <div className={styles.actions}>
          <div className={styles.firstaction}>
            <Button
              variant="outlined"
              textColor="var(--Accent_Color_Light)"
              borderColor="var(--Accent_Color_Light)"
              onClick={onSecondaryAction}
            >
              {secondaryActionLabel}
            </Button>
          </div>
          <div className={styles.secondaction}>
            <Button onClick={onPrimaryAction}>{primaryActionLabel}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleActionModal;
