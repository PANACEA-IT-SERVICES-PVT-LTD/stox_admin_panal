import React from "react";
import styles from "./HeadingAndInput.module.css";
const HeadingAndInput = ({
  title,
  placeholder,
  height = "50px",
  value,
  onChange,
  withBorder = false, // <-- just adds a border
}) => {
  const isTextarea = parseInt(height) > 60;

  const inputClassName = `${styles.input} ${
    withBorder ? styles.withBorder : ""
  }`;

  return (
    <div className={styles.container}>
      <label className={styles.label}>{title}</label>
      {isTextarea ? (
        <textarea
          className={inputClassName}
          placeholder={placeholder}
          style={{ height }}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type="text"
          className={inputClassName}
          placeholder={placeholder}
          style={{ height }}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default HeadingAndInput;
