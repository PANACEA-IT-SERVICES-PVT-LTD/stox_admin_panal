import React, { useState, useRef } from "react";
import styles from "./CalenderInput.module.css";
import { FiCalendar } from "react-icons/fi";

const CalendarInput = ({
  label = "Choose date",
  fieldLabel = "",
  required = false,
  value,
  onChange,
  background ,
  textColor ,
  iconColor = "var(--White_Color)",
  placeholderColor,
  borderRadius = "12px",
  shadow = true,
}) => {
  const inputRef = useRef();

  const handleInputChange = (e) => {
    onChange?.(e.target.value);
  };

  const openCalendar = () => {
    if (inputRef.current) {
      if (inputRef.current.showPicker) {
        inputRef.current.showPicker();
      } else {
        inputRef.current.click(); // fallback for Safari/Firefox
      }
    }
  };
  
  
  

  return (
    <div className={styles.fieldWrapper}>
      {fieldLabel && (
        <label className={styles.fieldLabel}>
          {fieldLabel} {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div
        className={styles.container}
        style={{
          background,
          color: textColor,
          borderRadius,
          boxShadow: shadow ? "0 8px 20px rgba(0,0,0,0.05)" : "none",
        }}
      >
        <input
          type="date"
          value={value}
         
          onChange={handleInputChange}
          ref={inputRef}
          required={required}
          className={styles.input}
        />
        <div className={styles.overlayText} style={{ color: placeholderColor }}>
          {value ? value : label}
        </div>
        <FiCalendar
          className={styles.icon}
          size={18}
          onClick={openCalendar}
          style={{ color: iconColor }}
        />
      </div>
    </div>
  );
};

export default CalendarInput;
