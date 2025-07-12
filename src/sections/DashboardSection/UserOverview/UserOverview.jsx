import styles from "./UserOverview.module.css";
import { useState } from "react";
// import IconAndName from "../../components/IconAndName/IconAndName";
import { IoAddCircleOutline } from "react-icons/io5";
// import CopyRight from "../../components/CopyRight/CopyRight";
import CalendarInput from "../../../components/CalenderInput/CalenderInput";

import HighlyEngagedUsers from "./HighlyEngagedUsers/HighlyEngagedUsers";
import TotalUsers from "./TotalUsers/TotalUsers";

const UserOverview = () => {
  const [activeTab, setActiveTab] = useState("Total Users");
  const [selectedDate, setSelectedDate] = useState("");

  const tab = [
    {
      label: "Total Users",
      content: <TotalUsers/>,
    },
    {
      label: "Highly Engaged Users",
      content: <HighlyEngagedUsers />,
    },
  ];

  return (
    <>
      <div className={styles.background}>
        <div className={styles.section}>
          <div className={styles.userOverviewCard}>
            {" "}
            {/* NEW WRAPPER */}
            <div className={styles.maincontainer}>
              {/* Tab Header */}
              <div className={styles.tabHeader}>
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

export default UserOverview;
