// 1. React & Hooks
import React, { useState } from "react";

// 2. Redux
import { useDispatch } from "react-redux";

// 3. Icons
import { FiUploadCloud } from "react-icons/fi";

// 4. Styles
import styles from "./CreateNotification.module.css";

// 5. Components (relative imports)
import ToClose from "../../components/ToClose/ToClose";
import HeadingAndInput from "../../components/HeadingAndInput/HeadingAndInput";
import Upload from "../../components/Upload/Upload";
import Button from "../../components/Button/Button";

// 6. Redux Actions
import { closeModal } from "../../redux/slices/modalSlice";

const CreateNotification = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleCreate = () => {
    // Submit logic here
    console.log({ title, description, file });
    dispatch(closeModal(""));
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Create Notification</h2>
          <ToClose />
        </div>

        <HeadingAndInput
          title="Title" // ✅ fixed
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          height="50px"
        />

        <HeadingAndInput
          title="Add Description" // ✅ fixed
          placeholder="Describe"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          height="150px"
        />

        <Upload
          label="Winning amounts"
          placeholder="Browse and upload Document"
          Icon={FiUploadCloud}
          onFileSelect={(f) => setFile(f)}
          boxStyle={{ padding: "40px" }}
        />

        <div className={styles.actions}>
          <div className={styles.cancel}>
            <Button
              variant="outlined"
              textColor="var(--Accent_Color_Light)"
              borderColor="var(--Accent_Color_Light)"
              onClick={() => dispatch(closeModal(""))}
            >
              Cancel
            </Button>
          </div>
          <div className={styles.addnotification}>
            <Button onClick={handleCreate}>Add Notification</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNotification;
