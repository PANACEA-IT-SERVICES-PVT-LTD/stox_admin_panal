import React from "react";
import styles from "./ActivitySection.module.css";
import ActivityPageCard from "../../../components/ActivityPageCard/ActivityPageCard";
import heartbeatIcon from "../../../assets/heartbeat-icon.png"; // replace with your icon path

const dummyLogs = [
  {
    title: "You are logged in",
    description: "You are logged in to the system at 10:00 PM",
    date: "Today",
    time: "11:00 PM",
    iconUrl: heartbeatIcon,
  },
  {
    title: "You are logged in",
    description: "You are logged in to the system at 10:00 PM",
    date: "Today",
    time: "11:00 PM",
    iconUrl: heartbeatIcon,
  },
  {
    title: "You are logged in",
    description: "You are logged in to the system at 10:00 PM",
    date: "Today",
    time: "11:00 PM",
    iconUrl: heartbeatIcon,
  },
  {
    title: "You are logged in",
    description: "You are logged in to the system at 10:00 PM",
    date: "Today",
    time: "11:00 PM",
    iconUrl: heartbeatIcon,
  },
];

const ActivitySection = () => {
  return (
    <div className={styles.grid}>
      {dummyLogs.map((log, index) => (
        <ActivityPageCard key={index} {...log} />
      ))}
    </div>
  );
};

export default ActivitySection;
