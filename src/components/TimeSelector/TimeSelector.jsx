// components/TimeSelector/TimeSelector.jsx
import React from "react";
import styles from "./TimeSelector.module.css";

const TimeSelector = ({ times = [], selectedTime, onSelect }) => {
  return (
    <div className={styles.timeSelector}>
      {times.map((time) => (
        <button
          key={time}
          className={`${styles.timeButton} ${
            selectedTime === time ? styles.active : ""
          }`}
          onClick={() => onSelect(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;
