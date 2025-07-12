import React from "react";
import styles from "./AcceptDeny.module.css";

const AcceptDeny = ({ onAccept, onDeny }) => {
  return (
    <div className={styles.actions}>
      <button className={styles.deny} onClick={onDeny}>
        Deny
      </button>
      <button className={styles.accept} onClick={onAccept}>
        Accept
      </button>
    </div>
  );
};

export default AcceptDeny;
