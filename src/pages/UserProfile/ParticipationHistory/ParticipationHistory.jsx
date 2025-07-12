import styles from "./ParticipationHistory.module.css";
import DynamicTable from "../../../components/DynamicTable/DynamicTable";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const ParticipationHistory = ({ data = [] }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activityOptions = [
    "All",
    "Buy Today Sell Tomorrow",
    "Intraday",
    "7-day Clash",
    "One Shot Glory",
  ];

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const selectFilter = (option) => {
    setSelectedFilter(option);
    setDropdownOpen(false);
  };

  const filteredData = data.filter((item) => {
    if (selectedFilter === "All") return true;
    return item.activity.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const headings = [
    {
      title: (
        <div className={styles.activityHeader}>
          <span>Contest Type</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown();
            }}
            className={styles.dropdownIcon}
          >
            <FiChevronDown size={14} />
          </button>
          {dropdownOpen && (
            <div className={styles.dropdownList}>
              {activityOptions.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => selectFilter(option)}
                  className={styles.dropdownItem}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      ),
      accessor: "activity",
    },
    { title: "Date", accessor: "date" },
    { title: "Duration", accessor: "time" },
    { title: "Entry Fee", accessor: "entryFee" },
    { title: "Status", accessor: "status" },
  ];

  const displayData = filteredData.map((item) => ({
    activity: item.activity,
    date: item.date,
    time: item.time,
    entryFee: item.entryFee,
    status: item.status,
  }));

  return (
    <div className={styles.totalpage}>
      <div className={styles.wrapper}>
        <DynamicTable headings={headings} columnData={displayData} />
      </div>
    </div>
  );
};

export default ParticipationHistory;
