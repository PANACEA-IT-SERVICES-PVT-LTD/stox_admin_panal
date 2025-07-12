import styles from "./UserManagement.module.css";
import { useState } from "react";
// import IconAndName from "../../components/IconAndName/IconAndName";
import { IoAddCircleOutline } from "react-icons/io5";
// import CopyRight from "../../components/CopyRight/CopyRight";
import CalendarInput from "../../components/CalenderInput/CalenderInput";

import UserDetails from "../../sections/UserManagementSection/UserDetails/UserDetails";
import UserKYCDetails from "../../sections/UserManagementSection/UserKYCDetails/UserKYCDetails";
import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";


const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("User Details");
 
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [selectedDate, setSelectedDate] = useState("");

  const tab = [
    {
      label: "User Details",
      content: <UserDetails />,
    },
    {
      label: "User KYC Details",
      content: <UserKYCDetails />,
    },
   
  ];

  return (
    <>
      <div className={styles.background}>
        <div className={styles.section}>
          <div className={styles.maincontainer}>
            <div className={styles.tabHeader}>
              <div className={styles.tabs}>
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
              </div>

              <div className={styles.filterWrapper}>
                <div className={styles.search}>
                  <SearchBar placeholder="Search by name" />
                </div>
                <div className={styles.calender}>
                  <CalendarInput
                    label="Joining Date"
                    value={selectedDate}
                    onChange={(val) => {
                      console.log("Selected date:", val);
                      setSelectedDate(val);
                    }}
                  />
                </div>
                <div className={styles.dropdown}>
                  <Dropdown
                    options={["Active", "Inactive"]}
                    selected={selectedStatus}
                    onSelect={(val) => {
                      console.log("Selected status:", val);
                      setSelectedStatus(val);
                    }}
                  />
                </div>
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

export default UserManagement;
