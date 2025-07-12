import React, { useState } from "react";
import TabSelector from "../../../components/TabSelector/TabSelector";
import OtherAdjustments from "./OtherAdjustments/OtherAdjustments";
import WithdrawalRequests from "./WithdrawalRequests/WithdrawalRequests";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Button from "../../../components/Button/Button";
import styles from "./Requests.module.css";

const Requests = () => {
  const [activeTab, setActiveTab] = useState("Other Adjustments");
  const [searchQuery, setSearchQuery] = useState("");

  // Temporary storage for visible data from child components
  const [otherData, setOtherData] = useState([]);
  const [withdrawalData, setWithdrawalData] = useState([]);

  const tabOptions = [
    { label: "Other Adjustments" },
    { label: "Withdrawal Requests" },
  ];

  const handleDownload = () => {
    const dataToExport =
      activeTab === "Other Adjustments" ? otherData : withdrawalData;

    if (dataToExport.length === 0) return alert("No data to export!");

    const csvRows = [];

    // Extract headers
    const headers = Object.keys(dataToExport[0]);
    csvRows.push(headers.join(","));

    // Extract values
    dataToExport.forEach((row) => {
      const values = headers.map((key) => {
        const cell = row[key];
        return typeof cell === "string" ? `"${cell}"` : cell;
      });
      csvRows.push(values.join(","));
    });

    const csvData = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(csvData);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeTab.replace(/\s+/g, "_")}_data.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topRow}>
        <TabSelector
          options={tabOptions}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === "Other Adjustments" && (
          <div className={styles.searchDownload}>
            <div className={styles.searchWrapper}>
              <SearchBar
                placeholder="Search by Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={handleDownload}>Download data</Button>
          </div>
        )}
      </div>

      {/* Conditional Render with Data Propagation */}
      {activeTab === "Other Adjustments" ? (
        <OtherAdjustments search={searchQuery} onDataChange={setOtherData} />
      ) : (
        <WithdrawalRequests
          search={searchQuery}
          onDataChange={setWithdrawalData}
        />
      )}
    </div>
  );
};

export default Requests;
