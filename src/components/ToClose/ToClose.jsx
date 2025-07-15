import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice"; // adjust path as needed
import styles from "./ToClose.module.css";

const ToClose = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.closeText} onClick={() => dispatch(closeModal(""))}>
      Close
    </div>
  );
};

export default ToClose;
