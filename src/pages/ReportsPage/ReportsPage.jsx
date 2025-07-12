import React, { useState } from "react";
import styles from "./ReportsPage.module.css";
import ReportsCard from "../../components/ReportsCard/ReportsCard";
import Dropdown from "../../components/Dropdown/Dropdown"; // ✅ import Dropdown

const contestOptions = ["All contests", "Head to Head", "Multi Member"];
const statusOptions = [
  "Upcoming Contests",
  "Running Contests",
  "Past Contests",
];

const reports = [
  { title: "Participation Report" },
  { title: "Revenue Report" },
  { title: "Wallet balance Changes" },
  { title: "Contest performance" },
];

function ReportsPage() {
  const [contestType, setContestType] = useState(contestOptions[0]);
  const [contestStatus, setContestStatus] = useState(statusOptions[0]);

  const handleExport = (title) => {
    console.log(`Exporting ${title}`);
    // Add your export logic here
  };

  return (
    <div className={styles.totalpage}>
      <div className={styles.filters}>
        <Dropdown
          options={statusOptions}
          selected={contestStatus}
          onSelect={setContestStatus}
        />
        <Dropdown
          options={contestOptions}
          selected={contestType}
          onSelect={setContestType}
        />
      </div>
      <div className={styles.page}>
        {/* ✅ Top section with filters */}

        {/* ✅ Cards */}
        {reports.map((report) => (
          <ReportsCard
            key={report.title}
            title={report.title}
            onExport={() => handleExport(report.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default ReportsPage;
