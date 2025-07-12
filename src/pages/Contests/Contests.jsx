import styles from "./Contests.module.css";
import { useState } from "react";
import CalendarInput from "../../components/CalenderInput/CalenderInput";
import AllTransactions from "../../sections/WalletSection/AllTransactions/AllTransactions";
import Withdrawals from "../../sections/WalletSection/Withdrawals/Withdrawals";
import TopUps from "../../sections/WalletSection/TopUps/TopUps";
import Button from "../../components/Button/Button";
import BuyTodaySellTomorrow from "../../sections/ContestSection/BuyTodaySellTomorrow/BuyTodaySellTomorrow";
import Intraday from "../../sections/ContestSection/Intraday/Intraday";

const Contests = () => {
  const [activeTab, setActiveTab] = useState("Buy today sell tomorrow");
  const [selectedDate, setSelectedDate] = useState("");

  const tab = [
    {
      label: "Buy today sell tomorrow",
      content: <BuyTodaySellTomorrow />,
    },
    {
      label: "Intraday",
      content: <Intraday />,
    },
    {
      label: "7-dayClash",
      content: <div>Contest Will be given here</div>,
    },
    {
      label: "One Shot Glory",
      content: <div>Contest Will be given here</div>,
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
                <Button onClick={console.log("Creating")}>
                  Create Contest
                </Button>
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

export default Contests;
