import React, { useState } from "react";
import styles from "./WinningsAndLeaderboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";
import { AnimatePresence, motion } from "framer-motion";
import ToClose from "../../components/ToClose/ToClose";

const WinningsAndLeaderboard = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Winnings");

  const { winningsData = [], leaderboardData = [] } = useSelector(
    (state) => state.modal.data || {}
  );

  const tabs = [
    {
      label: "Winnings",
      headings: ["Standing", "Amount"],
      rows: winningsData.map((row) => [row.standing, row.amount]),
    },
    {
      label: "LeaderBoard",
      headings: ["Standing", "Player"],
      rows: leaderboardData.map((row) => [row.standing, row.player]),
    },
  ];

  const currentTab = tabs.find((tab) => tab.label === activeTab);

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <p>Leader Board</p>
          <div className={styles.closeWrapper}>
            <ToClose onClick={() => dispatch(closeModal())} />
          </div>
        </div>

        {/* Tab Group Like Dashboard */}
        <div className={styles.tabGroup}>
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={`${styles.tabItem} ${
                activeTab === tab.label ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Animated Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.contentWrapper}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <table className={styles.table}>
              <thead>
                <tr>
                  {currentTab.headings.map((h, idx) => (
                    <th key={idx}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentTab.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WinningsAndLeaderboard;
