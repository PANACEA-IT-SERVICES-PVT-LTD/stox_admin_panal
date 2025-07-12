import styles from "./HighlyEngagedUsers.module.css";
import DynamicTable from "../../../../components/DynamicTable/DynamicTable";
import { useState } from "react";

const userData = [
  {
    _id: "1",
    name: "Darshan",
    contests: "100",
    phone: "8787878787",
    email: "darshan@gmail.com",
  },
  {
    _id: "2",
    name: "Varun",
    contests: "100",
    phone: "8787878787",
    email: "darshan@gmail.com",
  },
  {
    _id: "3",
    name: "Murali",
    contests: "1000",
    phone: "8787878787",
    email: "darshan@gmail.com",
  },
  {
    _id: "4",
    name: "Darshan",
    contests: "110",
    phone: "8787878787",
    email: "darshan@gmail.com",
  },
];

const HighlyEngagedUsers = () => {
  const handleDownload = (user) => {
    const dataStr = JSON.stringify(user, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${user.name}_highly_engaged_info.json`;
    link.click();

    URL.revokeObjectURL(url);
  };

  const headings = [
    { title: "# User Name", accessor: "name" },
    { title: "No.of.contests played", accessor: "contests" },
    { title: "Mobile Number", accessor: "phone" },
    { title: "Email ID", accessor: "email" },
    { title: "Actions", accessor: "actions" },
  ];

  const displayData = userData.map((user) => ({
    name: user.name,
    contests: user.contests,
    phone: user.phone,
    email: user.email,
    actions: (
      <span
        style={{
          color: "var(--Accent_Color_Light)",
          cursor: "pointer",
          fontWeight: 500,
        }}
        onClick={() => handleDownload(user)}
      >
        Download Info
      </span>
    ),
  }));

  return (
    <div className={styles.container}>
      <DynamicTable headings={headings} columnData={displayData} />
    </div>
  );
};

export default HighlyEngagedUsers;
