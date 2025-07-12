import styles from "./UserDetails.module.css";
import DynamicTable from "../../../components/DynamicTable/DynamicTable";
import { useState } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CalenderInput from "../../../components/CalenderInput/CalenderInput";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import CalendarInput from "../../../components/CalenderInput/CalenderInput";
const userData = [
  {
    _id: "1",
    name: "Darshan",
    username: "Darsh",
    phone: "9876543210",
    email: "darsh@gmail.com",
    date: "16-06-2025",
    wallet: "1000 INR",
    status: "Active",
  },
  {
    _id: "2",
    name: "Varun",
    username: "Darsh",
    phone: "9876543210",
    email: "darsh@gmail.com",
    date: "16-06-2025",
    wallet: "1000 INR",
    status: "Active",
  },
  // Add more users as needed
];

const UserDetails = () => {
    const navigate = useNavigate();

  const [selectedIds, setSelectedIds] = useState([]);

  const headings = [
    {
      title: (
        <div className={styles.headerCheckbox}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={selectedIds.length === userData.length}
            onChange={(e) => {
              const checked = e.target.checked;
              setSelectedIds(checked ? userData.map((d) => d._id) : []);
            }}
          />
          <span>Name</span>
        </div>
      ),
      accessor: "nameWithCheckbox",
    },

    { title: "# User Name", accessor: "username" },
    { title: "Mobile Number", accessor: "phone" },
    { title: "Email Id", accessor: "email" },
    { title: "Joining Date", accessor: "date" },
    { title: "Wallet Balance", accessor: "wallet" },
    { title: "Status", accessor: "status" },
  ];
  

  const displayData = userData.map((item) => {
    const isChecked = selectedIds.includes(item._id);

    return {
      nameWithCheckbox: (
        <div className={styles.nameCheckbox}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isChecked}
            onChange={(e) => {
              const checked = e.target.checked;
              setSelectedIds((prev) =>
                checked
                  ? [...prev, item._id]
                  : prev.filter((id) => id !== item._id)
              );
            }}
          />
          <u
            style={{ cursor: "pointer", }}
            onClick={() => navigate(`/usermanagement/userprofile/${item._id}`)}
          >
            {item.name}
          </u>
        </div>
      ),

      username: item.username,
      phone: item.phone,
      email: item.email,
      date: item.date,

      wallet: (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {item.wallet}
          <MdModeEdit
            style={{ cursor: "pointer" }}
            onClick={() => console.log("Edit Wallet for:", item.name)}
          />
        </div>
      ),

      status: (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ color: "green" }}>{item.status}</span>
          <MdModeEdit
            style={{ cursor: "pointer" }}
            onClick={() => console.log("Edit Status for:", item.name)}
          />
        </div>
      ),
    };
  });

  return (
    <div className={styles.totalpage}>
     
      <div className={styles.wrapper}>
        <DynamicTable headings={headings} columnData={displayData} />
      </div>
    </div>
  );
};

export default UserDetails;
