import styles from "./WalletHistory.module.css";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import DynamicTable from "../../../components/DynamicTable/DynamicTable";

const WalletHistory = ({ data = [] }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const typeOptions = [
    "All",
    "Withdraw",
    "Top Up",
    "Winning",
    "Contest Joined",
  ];

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const selectFilter = (option) => {
    setSelectedFilter(option);
    setDropdownOpen(false);
  };

  const filteredData = data.filter((item) => {
    if (selectedFilter === "All") return true;
    return item.type.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const headings = [
    {
      title: (
        <div className={styles.activityHeader}>
          <span>Type</span>
          <button
            className={styles.dropdownIcon}
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown();
            }}
          >
            <FiChevronDown size={14} />
          </button>
          {dropdownOpen && (
            <div className={styles.dropdownList}>
              {typeOptions.map((opt, idx) => (
                <div
                  key={idx}
                  className={styles.dropdownItem}
                  onClick={() => selectFilter(opt)}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      ),
      accessor: "type",
    },
    { title: "Date", accessor: "date" },
    { title: "Time", accessor: "time" },
    { title: "Amount", accessor: "amount" },
    { title: "Mode", accessor: "mode" },
    {
      title: "Status",
      accessor: "status",
      cell: (value) => (
        <span
          style={{
            color:
              value === "Successful"
                ? "var(--Success_Color)"
                : value === "Pending"
                ? "var(--Warning_Color)"
                : "inherit",
          }}
        >
          {value}
        </span>
      ),
    },
  ];

  const columnData = filteredData.map((entry) => ({
    type: entry.type,
    date: entry.date,
    time: entry.time,
    amount: entry.amount,
    mode: entry.mode,
    status: entry.status,
  }));

  return (
    <div className={styles.totalpage}>
      <div className={styles.wrapper}>
        <DynamicTable headings={headings} columnData={columnData} />
      </div>
    </div>
  );
};

export default WalletHistory;
