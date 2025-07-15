import React, { useState } from "react";
import styles from "./ChooseParticipants.module.css";

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import CalendarInput from "../../components/CalenderInput/CalenderInput";
import TimeInput from "../../components/TimeInput/TimeInput";
import CheckboxAndData from "../../components/CheckboxAndData/CheckboxAndData";
import Button from "../../components/Button/Button";
import ToClose from "../../components/ToClose/ToClose";

// Redux
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";

const participantsList = Array(18).fill({ name: "Darshan" }); // example data

const ChooseParticipants = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const isAllSelected = selected.length === participantsList.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelected([]);
    } else {
      setSelected(participantsList.map((_, index) => index));
    }
  };

  const toggleOne = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Choose participant</h2>
          <ToClose />
        </div>

        <div className={styles.filters}>
          <SearchBar placeholder="Search by User Name" />
          <CalendarInput
            label="Set Date"
            value={date}
            onChange={setDate}
            background="transparent"
            textColor="white"
            shadow={true} // ✅ Enable the white box shadow
            style={{ minWidth: "300px" }} // ✅ Set your desired width
          />

          <TimeInput
            value={time}
            onChange={setTime}
            placeholder="Set Time"
            min-width="300px" // ✅ Already OK
          />
        </div>
        <div className={styles.selectall}>
          <CheckboxAndData
            label="Select All"
            checked={isAllSelected}
            onChange={toggleSelectAll}
          />
        </div>

        <div className={styles.grid}>
          {participantsList.map((p, index) => (
            <CheckboxAndData
              key={index}
              label={p.name}
              checked={selected.includes(index)}
              onChange={() => toggleOne(index)}
            />
          ))}
        </div>

        <div className={styles.actions}>
          <Button
            variant="outlined"
            textColor="var(--Accent_Color_Light)"
            borderColor="var(--Accent_Color_Light)"
            onClick={() => dispatch(closeModal(""))}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              console.log("Selected:", selected, "Date:", date, "Time:", time);
              dispatch(closeModal(""));
            }}
          >
            Send Notification
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChooseParticipants;
