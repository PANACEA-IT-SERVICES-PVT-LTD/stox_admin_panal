import styles from "./UserKYCDetails.module.css";
import DynamicTable from "../../../components/DynamicTable/DynamicTable";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import AcceptDeny from "../../../components/AcceptDeny/AcceptDeny"; // your component
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/modalSlice";
const userData = [
  {
    _id: "1",
    name: "Darshan",
    username: "Darsh",
    phone: "9876543210",
    pan: "HUHSH4563F",
    dob: "16-06-2025",
    panImage: "panimage.jpg",
  },
  {
    _id: "2",
    name: "Varun",
    username: "Darsh",
    phone: "9876543210",
    pan: "HUHSH4563F",
    dob: "16-06-2025",
    panImage: "panimage.jpg",
  },
  {
    _id: "3",
    name: "Murali",
    username: "Darsh",
    phone: "9876543210",
    pan: "HUHSH4563F",
    dob: "16-06-2025",
    panImage: "panimage.jpg",
  },
  {
    _id: "4",
    name: "Darshan",
    username: "Darsh",
    phone: "9876543210",
    pan: "HUHSH4563F",
    dob: "16-06-2025",
    panImage: "panimage.jpg",
  },
];

const UserKYCDetails = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [statusMap, setStatusMap] = useState({}); // _id -> "Approved" | "Rejected"
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [reasonMap, setReasonMap] = useState({});

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
    { title: "PAN Number", accessor: "pan" },
    { title: "Date of Birth", accessor: "dob" },
    { title: "PAN Image", accessor: "panImage" },
    { title: "Status", accessor: "status" },
  ];

  const displayData = userData.map((item) => {
    const isChecked = selectedIds.includes(item._id);
    const status = statusMap[item._id] || "Pending";

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
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/usermanagement/userprofile/${item._id}`)}
          >
            {item.name}
          </u>
        </div>
      ),

      username: item.username,
      phone: item.phone,
      pan: item.pan,
      dob: item.dob,
      panImage: (
        <u
          style={{ cursor: "pointer" }}
          onClick={() =>
            dispatch(
              openModal({
                type: "viewPanDetails",
                data: {
                  name: "John Doe",
                  dateOfBirth: "10-11-1990",
                  panNumber: "SDFPT8543W",
                  imageLabel: "my pan.png",
                },
              })
            )
          }
        >
          {item.panImage}
        </u>
      ),

      status:
        status === "Pending" ? (
          <AcceptDeny
            onAccept={() =>
              setStatusMap((prev) => ({ ...prev, [item._id]: "Approved" }))
            }
            onDeny={() => {
              setStatusMap((prev) => ({ ...prev, [item._id]: "Rejected" }));
              dispatch(
                openModal({
                  type: "reasonModal",
                  data: {
                    userId: item._id,
                    reason: reasonMap[item._id] || "",
                    onSave: (newReason) =>
                      setReasonMap((prev) => ({
                        ...prev,
                        [item._id]: newReason,
                      })),
                  },
                })
              );
            }}
          />
        ) : (
          <span
            className={
              status === "Approved" ? styles.approved : styles.rejected
            }
            style={{ cursor: status === "Rejected" ? "pointer" : "default" }}
            onClick={() => {
              if (status === "Rejected") {
                dispatch(
                  openModal({
                    type: "reasonModal",
                    data: {
                      userId: item._id,
                      reason: reasonMap[item._id] || "",
                      onSave: (newReason) =>
                        setReasonMap((prev) => ({
                          ...prev,
                          [item._id]: newReason,
                        })),
                    },
                  })
                );
              }
            }}
          >
            {status}
          </span>
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

export default UserKYCDetails;
