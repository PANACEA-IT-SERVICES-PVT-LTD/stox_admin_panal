import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import profilephoto from "../../assets/profile.png";
import coverphoto from "../../assets/cover.png";
import styles from "./UserProfile.module.css";
import Button from "../../components/Button/Button";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ParticipationHistory from "./ParticipationHistory/ParticipationHistory";
import WalletHistory from "./WalletHistory/WalletHistory";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modalSlice";
const userData = [
  {
    _id: "1",
    name: "Darshan",
    role: "User",
    profileImage: coverphoto,
    coverImage: profilephoto,
    isKycDone: true,
    showKycStatus: true,
  },
  {
    _id: "2",
    name: "Varun",
    role: "Admin",
    profileImage: coverphoto,
    coverImage: profilephoto,
    isKycDone: false,
    showKycStatus: true,
  },
];

const participationData = [
  {
    activity: "9",
    date: "16-06-2025",
    time: "2 Hours",
    entryFee: "50 INR",
    status: "upcoming",
  },
  {
    activity: "BTST",
    date: "16-06-2025",
    time: "6 Hours",
    entryFee: "100 INR",
    status: "ongoing",
  },
  {
    activity: "One shot Glory",
    date: "16-06-2025",
    time: "1 month",
    entryFee: "120 INR",
    status: "won 250 INR",
  },
  {
    activity: "7-day Clash",
    date: "16-06-2025",
    time: "1 week",
    entryFee: "90 INR",
    status: "Lost 90 INR",
  },
];

const walletData = [
  {
    type: "Withdrawal",
    date: "16-06-2025",
    time: "10:25 PM",
    amount: "50 INR",
    mode: "Bank Account",
    status: "Successful",
  },
  {
    type: "Top Up",
    date: "16-06-2025",
    time: "10:25 PM",
    amount: "100 INR",
    mode: "UPI",
    status: "Pending",
  },
];

const UserProfile = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = userData.find((u) => u._id === userId);
  const [activeTab, setActiveTab] = useState("Participation history");
  const navigate = useNavigate();
  if (!user) return <div>User not found</div>;
  // Inside UserProfile component
  const calculateWalletBalance = (data) => {
    return data.reduce((total, entry) => {
      const amount = parseFloat(entry.amount?.replace(/[^\d.]/g, "") || 0);
      return total + (isNaN(amount) ? 0 : amount);
    }, 0);
  };

  const tabs = [
    {
      label: "Participation history",
      content: <ParticipationHistory data={participationData} />,
      data: participationData,
      headers: ["activity", "date", "time", "entryFee", "status"],
      fileName: "participation_history.csv",
    },
    {
      label: "Wallet history",
      content: <WalletHistory data={walletData} />,
      data: walletData,
      headers: ["type", "date", "time", "amount", "mode", "status"],
      fileName: "wallet_history.csv",
    },
  ];

  const downloadCSV = (filename, headers, data) => {
    const csvRows = [headers.join(",")];

    data.forEach((row) => {
      const rowValues = headers.map((h) => `"${row[h] || ""}"`);
      csvRows.push(rowValues.join(","));
    });

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <div className={styles.background}>
      <div className={styles.section}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <IoIosArrowBack
              size={20}
              className={styles.backIcon}
              onClick={() => navigate(-1)}
            />
            <span className={styles.pageTitle}>User Profile</span>
          </div>
        </div>

        <ProfileCard
          name={user.name}
          role={user.role}
          coverImage={user.coverImage}
          profileImage={user.profileImage}
          isKycDone={user.isKycDone}
          showKycStatus={user.showKycStatus}
        />

        <div className={styles.maincontainer}>
          <div className={styles.tabHeader}>
            <div className={styles.toggles}>
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`${styles.tabItem} ${
                    activeTab === tab.label && styles.activeTab
                  }`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  {tab.label}
                </div>
              ))}
            </div>

            <div className={styles.rightActions}>
              {/* ✅ Wallet Balance shown only for Wallet History tab */}
              {activeTab === "Wallet history" && (
                <div className={styles.walletBalance}>
                  Wallet Balance : INR {calculateWalletBalance(walletData)}
                </div>
              )}
              <Button
                onClick={() => {
                  const active = tabs.find((tab) => tab.label === activeTab);
                  dispatch(
                    openModal({
                      type: "downloadDataRange",
                      data: {
                        fileName: active.fileName,
                        headers: active.headers,
                        originalData: active.data, // send full data to filter
                      },
                    })
                  );
                }}
              >
                Download data
              </Button>
            </div>
          </div>

          {/* Render the active tab's content */}
          {tabs.map((tab) =>
            activeTab === tab.label ? (
              <div key={tab.label}>{tab.content}</div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
