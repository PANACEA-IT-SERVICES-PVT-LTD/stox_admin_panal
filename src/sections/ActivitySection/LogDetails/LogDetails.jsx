import styles from "./LogDetails.module.css";
import DynamicTable from "../../../components/DynamicTable/DynamicTable";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const logData = [
  { _id: "1", activity: "Log in", date: "16-02-2025", time: "10:25 PM" },
  { _id: "2", activity: "Log in", date: "16-02-2025", time: "10:25 PM" },
  { _id: "3", activity: "Log out", date: "16-02-2025", time: "10:25 PM" },
  { _id: "4", activity: "Log Out", date: "16-02-2025", time: "10:25 PM" },
];

const LogDetails = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activityOptions = ["All", "Log In", "Log Out"];
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const selectFilter = (option) => {
    setSelectedFilter(option);
    setDropdownOpen(false);
  };

  const filteredData = logData.filter((item) => {
    if (selectedFilter === "All") return true;
    return item.activity.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const headings = [
    {
      title: (
        <div className={styles.activityHeader}>
          <span>Activity</span>
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent table sort if any
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
    { title: "Time", accessor: "time" },
  ];
  

  const displayData = filteredData.map((item) => ({
    activity: item.activity,
    date: item.date,
    time: item.time,
  }));

  return (
    <div className={styles.totalpage}>
     
      <div className={styles.wrapper}>
        <DynamicTable headings={headings} columnData={displayData} />
      </div>
    </div>
  );
};

export default LogDetails;
