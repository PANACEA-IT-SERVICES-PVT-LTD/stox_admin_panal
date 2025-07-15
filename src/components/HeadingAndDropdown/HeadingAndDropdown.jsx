import React from "react";
import styles from "./HeadingAndDropdown.module.css";

const HeadingAndDropdown = ({
  title = "Select",
  options = [],
  value,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{title}</label>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HeadingAndDropdown;
