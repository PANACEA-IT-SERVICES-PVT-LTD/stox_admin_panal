import styles from "./WalletPage.module.css";
import { useState } from "react";
// import IconAndName from "../../components/IconAndName/IconAndName";
import { IoAddCircleOutline } from "react-icons/io5";
// import CopyRight from "../../components/CopyRight/CopyRight";
import CalendarInput from "../../components/CalenderInput/CalenderInput";
import ActivitySection from "../../sections/ActivitySection/Activity/ActivitySection";
import AllTransactions from "../../sections/WalletSection/AllTransactions/AllTransactions";
import Withdrawals from "../../sections/WalletSection/Withdrawals/Withdrawals";
import TopUps from "../../sections/WalletSection/TopUps/TopUps";
import Requests from "../../sections/WalletSection/Requests/Requests";

const WalletPage = () => {
  const [activeTab, setActiveTab] = useState("All Transactions");
  const [selectedDate, setSelectedDate] = useState("");

  const tab = [
    {
      label: "All Transactions",
      content: <AllTransactions />,
    },
    {
      label: "Withdrawals",
      content: <Withdrawals/>,
    },
    {
      label: "Top Ups",
      content: <TopUps />,
    },
    {
      label: "Requests",
      content: <Requests />,
    },
  ];

  return (
    <>
      <div className={styles.background}>
        <div className={styles.section}>
          <div className={styles.maincontainer}>
            <div className={styles.tabHeader}>
              {tab.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.tabItem} ${
                    activeTab === item.label && styles.activeTab
                  }`}
                  onClick={() => setActiveTab(item.label)}
                >
                  {item.label}
                </div>
              ))}

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
            </div>

            {/* {/* {activeTab === "Activity" && (
              <div className={styles.buttonRow}>
                <IconAndName
                  icon={<IoAddCircleOutline />}
                  title="Add Activity"
                  bgColor="Primary_Color"
                  onClick={() => console.log("Add Activity")}
                />
              </div>
            )}
            {activeTab === "Log details" && (
              <div className={styles.buttonRow}>
                <IconAndName
                  icon={<IoAddCircleOutline />}
                  title="Add Log"
                  bgColor="Primary_Color"
                  onClick={() => console.log("Add Log")}
                />
              </div> */}
            {/* )} */}
          </div>

          {tab.map((item) =>
            activeTab === item.label ? <>{item.content}</> : null
          )}
        </div>
      </div>
      {/* <div>{<CopyRight />}</div> */}
    </>
  );
};

export default WalletPage;
