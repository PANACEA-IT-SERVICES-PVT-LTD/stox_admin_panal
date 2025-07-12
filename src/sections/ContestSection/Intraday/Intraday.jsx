import React, { useState, useEffect } from "react";
import Dropdown from "../../../components/Dropdown/Dropdown";
import ContestCard from "../../../components/ContestCard/ContestCard";
import TimeSelector from "../../../components/TimeSelector/TimeSelector";
import styles from "./Intraday.module.css";

const Intraday = () => {
  const [contestType, setContestType] = useState("Stock Contest");
  const [contestStatus, setContestStatus] = useState("Upcoming Contests");
  const [selectedTime, setSelectedTime] = useState("9:30am");

  const timeSlots = [
    "9:30am",
    "10:30am",
    "11:30am",
    "12:30pm",
    "1:30pm",
    "2:30pm",
  ];

  const [contests, setContests] = useState([]);

  // Load contests dynamically
  useEffect(() => {
    const contestData = [
      {
        id: 1,
        prize: "80",
        entryFee: "50",
        timeLeft: "2 : 00 : 34 sec Left",
        schedule: "Friday 9:30am to 3:30pm",
        leftSpots: 2,
        totalSpots: 2,
        reward: "80rs",
        payout: "50%",
        isDisabled: true,
        timeSlot: "9:30am",
      },
      {
        id: 2,
        prize: "100",
        entryFee: "70",
        timeLeft: "1 : 30 : 00 sec Left",
        schedule: "Friday 10:30am to 3:30pm",
        leftSpots: 4,
        totalSpots: 8,
        reward: "120rs",
        payout: "60%",
        isDisabled: false,
        timeSlot: "10:30am",
      },
      {
        id: 3,
        prize: "200",
        entryFee: "90",
        timeLeft: "1 : 00 : 00 sec Left",
        schedule: "Friday 12:30pm to 3:30pm",
        leftSpots: 1,
        totalSpots: 6,
        reward: "200rs",
        payout: "40%",
        isDisabled: false,
        timeSlot: "12:30pm",
      },
    ];
    setContests(contestData);
  }, []);

  const toggleStatus = (id) => {
    setContests((prevContests) =>
      prevContests.map((contest) =>
        contest.id === id
          ? { ...contest, isDisabled: !contest.isDisabled }
          : contest
      )
    );
  };

  const filteredContests = contests.filter(
    (contest) => contest.timeSlot === selectedTime
  );

  return (
    <div className={styles.wrapper}>
      {/* Top Row */}
      <div className={styles.headerRow}>
        <TimeSelector
          times={timeSlots}
          selectedTime={selectedTime}
          onSelect={setSelectedTime}
        />
        <div className={styles.dropdownGroup}>
          <Dropdown
            options={["Stock Contest", "Crypto Contest"]}
            selected={contestType}
            onSelect={setContestType}
          />
          <Dropdown
            options={[
              "Upcoming Contests",
              "Live Contests",
              "Completed Contests",
            ]}
            selected={contestStatus}
            onSelect={setContestStatus}
          />
        </div>
      </div>

      {/* Card Grid */}
      <div className={styles.cardGrid}>
        {filteredContests.length === 0 ? (
          <p style={{ color: "#aaa" }}>No contests available at this time.</p>
        ) : (
          filteredContests.map((contest) => (
            <ContestCard
              key={contest.id}
              price={contest.prize}
              entry={`${contest.entryFee}rs`}
              timeLeft={contest.timeLeft}
              timeSlot={contest.schedule}
              leftSpots={contest.leftSpots}
              totalSpots={contest.totalSpots}
              winAmount={contest.reward}
              winPercentage={contest.payout}
              isDisabled={contest.isDisabled}
              onEdit={() => console.log("Edit", contest.id)}
              onDelete={() => console.log("Delete", contest.id)}
              onDisable={() => toggleStatus(contest.id)}
              onJoin={() => console.log("Leaderboard", contest.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Intraday;
