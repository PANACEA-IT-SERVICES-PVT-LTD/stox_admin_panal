import styles from "./Withdrawals.module.css";
import DynamicTable from "../../../components/DynamicTable/DynamicTable";
import { useState } from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { MdModeEdit } from "react-icons/md";
import CalendarInput from "../../../components/CalenderInput/CalenderInput";
import Button from "../../../components/Button/Button"; // adjust path as needed

const userData = [
  {
    _id: "1",
    name: "Darshan",
    type: "Withdrawal",
    date: "16-02-2025",
    time: "10:25 PM",
    amount: "150 INR",
    mode: "UPI",
    status: "Success",
  },
  {
    _id: "2",
    name: "Varun",
    type: "Withdrawal",
    date: "16-02-2025",
    time: "10:25 PM",
    amount: "120 INR",
    mode: "Bank Account",
    status: "Success",
  },
  {
    _id: "3",
    name: "Murali",
    type: "Withdrawal",
    date: "16-02-2025",
    time: "10:25 PM",
    amount: "100 INR",
    mode: "NEFT",
    status: "Pending",
  },
  {
    _id: "4",
    name: "Darshan",
    type: "Withdrawal",
    date: "16-02-2025",
    time: "10:25 PM",
    amount: "80 INR",
    mode: "UPI",
    status: "Failed",
  },
];
  

const Withdrawals = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [selectedIds, setSelectedIds] = useState([]);
  const downloadCSV = () => {
    const headers = [
      "Participant",
      "Type",
      "Date",
      "Time",
      "Amount",
      "Mode",
      "Status",
    ];
    const rows = userData.map((item) => [
      item.name,
      item.type,
      item.date,
      item.time,
      item.amount,
      item.mode,
      item.status,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "withdrawals.csv");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const headings = [
    {
      title: (
        <input
          type="checkbox"
          checked={selectedIds.length === userData.length}
          onChange={(e) => {
            const checked = e.target.checked;
            setSelectedIds(checked ? userData.map((d) => d._id) : []);
          }}
        />
      ),
      accessor: "checkbox",
    },
    { title: "Participant", accessor: "name" },
    { title: "Type", accessor: "type" },
    { title: "Date", accessor: "date" },
    { title: "Time", accessor: "time" },
    { title: "Amount", accessor: "amount" },
    { title: "Mode", accessor: "mode" },
    { title: "Status", accessor: "status" },
  ];

  const displayData = userData.map((item) => {
    const isChecked = selectedIds.includes(item._id);

    const getStatusColor = (status) => {
      if (status === "Success") return "var(--Success_Color)";
      if (status === "Pending") return "var(--Warning_Color)";
      if (status === "Failed") return "var(--Error_Color)";
      return "inherit";
    };

    return {
      checkbox: (
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
      ),
      name: <u>{item.name}</u>,
      type: item.type,
      date: item.date,
      time: item.time,
      amount: item.amount,
      mode: item.mode,
      status: (
        <span style={{ color: getStatusColor(item.status) }}>
          {item.status}
        </span>
      ),
    };
  });

  return (
    <div className={styles.totalpage}>
      <div className={styles.filterWrapper}>
        <div className={styles.search}>
          <SearchBar placeholder="Search by name" />
        </div>
        <div className={styles.downloadBtn}>
          <Button onClick={downloadCSV}>Download data</Button>
        </div>
      </div>
      <div className={styles.wrapper}>
        <DynamicTable headings={headings} columnData={displayData} />
      </div>
    </div>
  );
};

export default Withdrawals;
