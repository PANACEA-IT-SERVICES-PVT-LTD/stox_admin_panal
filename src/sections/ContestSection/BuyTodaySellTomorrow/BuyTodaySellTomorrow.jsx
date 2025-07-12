import React, { useState } from "react";
import Dropdown from "../../../components/Dropdown/Dropdown";
import ContestCard from "../../../components/ContestCard/ContestCard";
import styles from "./BuyTodaySellTomorrow.module.css";

const BuyTodaySellTomorrow = () => {
  const [contestType, setContestType] = useState("All Contests");
  const [contestStatus, setContestStatus] = useState("Upcoming Contests");
  const [contests, setContests] = useState([
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
    },
    {
      id: 2,
      prize: "80",
      entryFee: "50",
      timeLeft: "2 : 00 : 34 sec Left",
      schedule: "Friday 9:30am to 3:30pm",
      leftSpots: 2,
      totalSpots: 4,
      reward: "80rs",
      payout: "50%",
      isDisabled: false,
    },
    {
      id: 3,
      prize: "80",
      entryFee: "50",
      timeLeft: "2 : 00 : 34 sec Left",
      schedule: "Friday 9:30am to 3:30pm",
      leftSpots: 50,
      totalSpots: 100,
      reward: "80rs",
      payout: "50%",
      isDisabled: false,
    },
    {
      id: 4,
      prize: "80",
      entryFee: "50",
      timeLeft: "2 : 00 : 34 sec Left",
      schedule: "Friday 9:30am to 3:30pm",
      leftSpots: 50,
      totalSpots: 100,
      reward: "80rs",
      payout: "50%",
      isDisabled: false,
    },
    {
      id: 5,
      prize: "80",
      entryFee: "50",
      timeLeft: "2 : 00 : 34 sec Left",
      schedule: "Friday 9:30am to 3:30pm",
      leftSpots: 50,
      totalSpots: 100,
      reward: "80rs",
      payout: "50%",
      isDisabled: true,
    },
  ]);

  const toggleStatus = (id) => {
    setContests((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isDisabled: !c.isDisabled } : c))
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dropdownGroup}>
        <Dropdown
          options={["All Contests", "Stock Contest", "Crypto Contest"]}
          selected={contestType}
          onSelect={setContestType}
        />
        <Dropdown
          options={["Upcoming Contests", "Live Contests", "Completed Contests"]}
          selected={contestStatus}
          onSelect={setContestStatus}
        />
      </div>

      <div className={styles.cardGrid}>
        {contests.map((contest) => (
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
        ))}
      </div>
    </div>
  );
};

export default BuyTodaySellTomorrow;
