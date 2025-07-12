import styles from "./TotalUsers.module.css";
import DynamicTable from "../../../../components/DynamicTable/DynamicTable";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";

const userData = [
  {
    _id: "1",
    name: "Darshan",
    username: "Darsh",
    phone: "9876543210",
    email: "darshan@gmail.com",
    date: "16-06-2025",
    wallet: "1000 INR",
    status: "Active",
  },
  {
    _id: "2",
    name: "Varun",
    username: "Var",
    phone: "9876543210",
    email: "darshan@gmail.com",
    date: "16-06-2025",
    wallet: "1000 INR",
    status: "Active",
  },
  {
    _id: "3",
    name: "Murali",
    username: "Murali123",
    phone: "8787878787",
    email: "darshan@gmail.com",
    date: "16-06-2025",
    wallet: "100 INR",
    status: "Inactive",
  },
];

const TotalUsers = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleDownload = (user) => {
    const dataStr = JSON.stringify(user, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${user.name}_info.json`;
    link.click();

    URL.revokeObjectURL(url);
  };

  const headings = [
    { title: "# User Name", accessor: "username" },
    { title: "No.of.contests played", accessor: "contests" },
    { title: "Mobile Number", accessor: "phone" },
    { title: "Email ID", accessor: "email" },
    { title: "Actions", accessor: "actions" },
  ];

  const displayData = userData.map((item) => ({
    username: item.name,
    contests: item._id === "1" ? "100" : item._id === "2" ? "10" : "01", // for illustration
    phone: item.phone,
    email: item.email,
    actions: (
      <span
        style={{
          color: "var(--Accent_Color_Light)",
          cursor: "pointer",
          fontWeight: 500,
        }}
        onClick={() => handleDownload(item)}
      >
        Download Info
      </span>
    ),
  }));

  return (
    <div className={styles.totalpage}>
      <div className={styles.wrapper}>
        <DynamicTable headings={headings} columnData={displayData} />
      </div>
    </div>
  );
};

export default TotalUsers;
