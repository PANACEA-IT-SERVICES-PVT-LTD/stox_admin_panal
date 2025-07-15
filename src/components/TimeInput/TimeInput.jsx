import React, { useRef } from "react";
import { FiClock } from "react-icons/fi";
import styles from "./TimeInput.module.css";

const TimeInput = ({
  value,
  onChange,
  placeholder = "Set Time",
  heading = "",
}) => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker?.(); // modern browsers
      inputRef.current.click(); // fallback
    }
  };

  return (
    <div className={styles.fieldWrapper}>
      {heading && <label className={styles.heading}>{heading}</label>}
      <div className={styles.container}>
        <input
          type="time"
          ref={inputRef}
          className={`${styles.input} ${!value ? styles.transparentText : ""}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {!value && <span className={styles.placeholder}>{placeholder}</span>}
        <FiClock className={styles.icon} onClick={handleIconClick} />
      </div>
    </div>
  );
};

export default TimeInput;
