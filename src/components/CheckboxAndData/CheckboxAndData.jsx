import React from "react";
import styles from "./CheckboxAndData.module.css";

const CheckboxAndData = ({
  label = "",
  checked = false,
  onChange = () => {},
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default CheckboxAndData;
