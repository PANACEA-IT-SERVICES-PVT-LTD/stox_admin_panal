import React, { useState } from "react";
import styles from "./WithdrawRequestCard.module.css";
import AcceptDeny from "../AcceptDeny/AcceptDeny"; // Adjust path if needed

const WithdrawRequestCard = ({ name, username, avatar }) => {
  const [status, setStatus] = useState("Pending");

  const handleAccept = () => setStatus("Approved");
  const handleDeny = () => setStatus("Rejected");

  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.username}>{username}</div>
        </div>
      </div>

      {status === "Pending" ? (
        <AcceptDeny onAccept={handleAccept} onDeny={handleDeny} />
      ) : (
        <div
          className={status === "Approved" ? styles.approved : styles.rejected}
        >
          {status}
        </div>
      )}
    </div>
  );
};

export default WithdrawRequestCard;
