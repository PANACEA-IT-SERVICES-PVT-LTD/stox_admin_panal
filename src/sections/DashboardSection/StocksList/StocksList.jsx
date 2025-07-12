import styles from "./StocksList.module.css";
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import CalendarInput from "../../../components/CalenderInput/CalenderInput";
import TotalStocks from "./TotalStocks/TotalStocks";
import SelectedStocks from "./SelectedStocks/SelectedStocks";
import SearchBar from "../../../components/SearchBar/SearchBar";

const StocksList = () => {
  const [activeTab, setActiveTab] = useState("Total Stocks");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.background}>
      <div className={styles.section}>
        <div className={styles.userOverviewCard}>
          {/* Header Section */}
          <div className={styles.tabSearchContainer}>
            <div className={styles.tabHeader}>
              {["Total Stocks", "Selected Stocks"].map((label, index) => (
                <div
                  key={index}
                  className={`${styles.tabItem} ${
                    activeTab === label ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab(label)}
                >
                  {label}
                </div>
              ))}
            </div>

            <div className={styles.searchWrapper}>
              <SearchBar
                placeholder={`Search in ${activeTab}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Active Tab Content */}
          {activeTab === "Total Stocks" ? (
            <TotalStocks searchQuery={searchQuery} />
          ) : (
            <SelectedStocks searchQuery={searchQuery} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StocksList;
