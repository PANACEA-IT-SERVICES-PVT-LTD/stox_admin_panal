import React from "react";
import styles from "./Upload.module.css";

const Upload = ({
  label = "Upload",
  placeholder = "Browse and upload document",
  Icon,
  onFileSelect,
  boxStyle = {},
  textStyle = {},
}) => {
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect?.(e.target.files[0]);
    }
  };

  return (
    <div className={styles.uploadWrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.uploadBox} style={boxStyle}>
        <input
          type="file"
          id="fileInput"
          className={styles.fileInput}
          onChange={handleChange}
        />
        <label
          htmlFor="fileInput"
          className={styles.innerContent}
          style={textStyle}
        >
          {Icon && <Icon size={40} />}
          <span>{placeholder}</span>
        </label>
      </div>
    </div>
  );
};

export default Upload;
