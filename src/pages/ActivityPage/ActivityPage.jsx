import styles from "./ActivityPage.module.css";
import { useState } from "react";
import CalendarInput from "../../components/CalenderInput/CalenderInput";
import ActivitySection from "../../sections/ActivitySection/Activity/ActivitySection";
import LogDetails from "../../sections/ActivitySection/LogDetails/LogDetails";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

import profilephoto from "../../assets/profile.png";
import coverphoto from "../../assets/cover.png";

const ActivityPage = () => {
  const [activeTab, setActiveTab] = useState("Activity");
  const [selectedDate, setSelectedDate] = useState("");

  const tab = [
    {
      label: "Activity",
      content: <ActivitySection />,
    },
    {
      label: "Log details",
      content: <LogDetails />,
    },
  ];

  return (
    <div className={styles.background}>
      <div className={styles.section}>
        {/* ✅ Only show Change Password */}
        <div className={styles.profilecard}>
          <ProfileCard
            name="Darshan"
            role="Admin"
            profileImage={coverphoto}
            coverImage={profilephoto}
            showChangePasswordButton={true}
            onChangePassword={() => alert("Redirect to change password")}
            // ❌ No KYC props here – it won't show
          />
        </div>

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
        </div>

        {/* Tabs */}
        {tab.map((item) =>
          activeTab === item.label ? <>{item.content}</> : null
        )}
      </div>
    </div>
  );
};

export default ActivityPage;
