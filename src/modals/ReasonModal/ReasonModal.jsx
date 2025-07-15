import styles from "./ReasonModal.module.css";
import HeadingAndInput from "../../components/HeadingAndInput/HeadingAndInput";
import Button from "../../components/Button/Button";
import ToClose from "../../components/ToClose/ToClose";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";

function ReasonModal() {
  const dispatch = useDispatch();
  const { reason: initialReason = "", onSave } = useSelector(
    (state) => state.modal.data || {}
  );
  const [reason, setReason] = useState(initialReason);

  const handleSave = () => {
    if (onSave) {
      onSave(reason); // Call the onSave passed from modal data
    }
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h2>Reason</h2>
          <ToClose />
        </div>

        <HeadingAndInput
          title="Reason for rejection"
          placeholder="Describe reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          height="120px"
          withBorder
        />

        <div className={styles.actions}>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default ReasonModal;
