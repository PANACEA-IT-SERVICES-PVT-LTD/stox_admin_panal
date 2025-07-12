import styles from "./Dashboard.module.css";
import { useState } from "react";
import CalendarInput from "../../components/CalenderInput/CalenderInput";
import AllTransactions from "../../sections/WalletSection/AllTransactions/AllTransactions";
import Withdrawals from "../../sections/WalletSection/Withdrawals/Withdrawals";
import TopUps from "../../sections/WalletSection/TopUps/TopUps";
import Button from "../../components/Button/Button";
import UserOverview from "../../sections/DashboardSection/UserOverview/UserOverview";
import RevenueOverview from "../../sections/DashboardSection/RevenueOverview/RevenueOverview";
import StocksList from "../../sections/DashboardSection/StocksList/StocksList";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("User Overview");
  const [selectedDate, setSelectedDate] = useState("");

  const tab = [
    {
      label: "User Overview",
      content: <UserOverview />,
    },
    {
      label: "Revenue Overview",
      content: <RevenueOverview />,
    },
    {
      label: "Stocks List",
      content: <StocksList />,
    },
  ];

  return (
    <>
      <div className={styles.background}>
        <div className={styles.section}>
          <div className={styles.maincontainer}>
            {/* Tab Header and Date Filter */}
            <div className={styles.tabContainer}>
              {/* Tab Group with Bordered Box */}
              <div className={styles.tabGroup}>
                {tab.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.tabItem} ${
                      activeTab === item.label ? styles.activeTab : ""
                    }`}
                    onClick={() => setActiveTab(item.label)}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Date Filter (outside border box) */}
              <div className={styles.dateFilter}>
                <CalendarInput
                  label="Date"
                  value={selectedDate}
                  onChange={setSelectedDate}
                  background="transparent"
                  textColor="var(--White_Color)"
                  iconColor="var(--White_Color)"
                  placeholderColor="var(--White_Color)"
                  shadow={false}
                />
              </div>
              <div className={styles.downloadBtn}>
                <Button onClick={console.log("Creating")}>Create Contest</Button>
              </div>
            </div>

            {/* Active Tab Content */}
            {tab.map((item) =>
              activeTab === item.label ? <>{item.content}</> : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
