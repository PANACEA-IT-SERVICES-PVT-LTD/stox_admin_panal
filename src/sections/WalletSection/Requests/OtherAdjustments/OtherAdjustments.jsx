import styles from "./OtherAdjustments.module.css";
import DynamicTable from "../../../../components/DynamicTable/DynamicTable";
import { useState, useEffect } from "react";
import { MdModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../redux/slices/modalSlice"; // adjust path if needed

const userData = [
  {
    _id: "1",
    name: "Darshan",
    username: "Darsh",
    wallet: "1000 INR",
    status: "Active",
  },
  {
    _id: "2",
    name: "Varun",
    username: "Darsh",
    wallet: "1000 INR",
    status: "Active",
  },
  {
    _id: "3",
    name: "Murali",
    username: "Darsh",
    wallet: "1000 INR",
    status: "Active",
  },
  {
    _id: "4",
    name: "Darshan",
    username: "Darsh",
    wallet: "1000 INR",
    status: "Active",
  },
];

const OtherAdjustments = ({ search = "", onDataChange }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const dispatch = useDispatch();

  const filteredData = userData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (onDataChange) {
      onDataChange(
        filteredData.map(({ name, username, wallet, status }) => ({
          name,
          username,
          wallet,
          status,
        }))
      );
    }
  }, [search, selectedIds]);

  const headings = [
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input
            type="checkbox"
            checked={selectedIds.length === filteredData.length}
            onChange={(e) => {
              const checked = e.target.checked;
              setSelectedIds(checked ? filteredData.map((d) => d._id) : []);
            }}
          />
          Name
        </div>
      ),
      accessor: "name",
    },
    { title: "# User Name", accessor: "username" },
    { title: "Wallet Balance", accessor: "wallet" },
    { title: "Status", accessor: "status" },
  ];

  const displayData = filteredData.map((item) => {
    const isChecked = selectedIds.includes(item._id);

    return {
      name: (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input
            type="checkbox"
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
          <u>{item.name}</u>
        </div>
      ),
      username: item.username,
       wallet: (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {item.wallet}
                <MdModeEdit
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(openModal("updateBalance"))} // ✅
                />
              </div>
            ),
      
            status: (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "green" }}>{item.status}</span>
                <MdModeEdit
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(openModal("updateStatus"))} // ✅
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

export default OtherAdjustments;
