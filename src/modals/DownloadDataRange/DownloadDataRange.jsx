import styles from "./DownloadDataRange.module.css";
import Button from "../../components/Button/Button";
import ToClose from "../../components/ToClose/ToClose";
import CalendarInput from "../../components/CalenderInput/CalenderInput";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";

function DownloadDataRange() {
  const dispatch = useDispatch();
  const { fileName, headers, originalData } = useSelector(
    (state) => state.modal.data || {}
  );

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const isValidDateRange =
    fromDate && toDate && new Date(fromDate) <= new Date(toDate);

  const formatDate = (dateStr) => {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split("-");
    return new Date(`${year}-${month}-${day}`);
  };

  const filterData = () => {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    return originalData.filter((row) => {
      const rowDate = formatDate(row.date);
      return rowDate && rowDate >= from && rowDate <= to;
    });
  };

  const downloadCSV = () => {
    if (!isValidDateRange) {
      alert(
        "Please select a valid date range where 'From' is before or equal to 'To'."
      );
      return;
    }

    const data = filterData();

    if (data.length === 0) {
      alert("No data available in the selected date range.");
      return;
    }

    const csvRows = [headers.join(",")];
    data.forEach((row) => {
      const values = headers.map((h) => `"${row[h] || ""}"`);
      csvRows.push(values.join(","));
    });

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    dispatch(closeModal());
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h2>Download data</h2>
          <ToClose />
        </div>

        <div className={styles.dateRow}>
          <div className={styles.dateField}>
            <label className={styles.label}>From</label>
            <CalendarInput
              placeholder="Choose date"
              value={fromDate}
              style={{ width: 200 }}
              onChange={setFromDate}
            />
          </div>
          <div className={styles.dateField}>
            <label className={styles.label}>To</label>
            <CalendarInput
              placeholder="Choose date"
              value={toDate}
              style={{ width: 200 }}
              onChange={setToDate}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <Button variant="outlined" onClick={() => dispatch(closeModal())}>
            Cancel
          </Button>
          <Button onClick={downloadCSV} disabled={!isValidDateRange}>
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DownloadDataRange;
