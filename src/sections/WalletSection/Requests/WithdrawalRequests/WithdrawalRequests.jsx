import React from "react";
import WithdrawRequestCard from "../../../../components/WithdrawRequestCard/WithdrawRequestCard";
import styles from "./WithdrawalRequests.module.css";
import avatarImage from "../../../../assets/avatar.png";


const dummyData = Array.from({ length: 10 }, (_, index) => ({
  name: "Darshan",
  username: "Darshan12",
  avatar: avatarImage, // Adjust path to your avatar image
}));

const WithdrawalRequests = () => {
  return (
    <div className={styles.gridWrapper}>
      {dummyData.map((user, i) => (
        <WithdrawRequestCard
          key={i}
          name={user.name}
          username={user.username}
          avatar={user.avatar}
          onAccept={() => console.log("Accepted", i)}
          onDeny={() => console.log("Denied", i)}
        />
      ))}
    </div>
  );
};

export default WithdrawalRequests;
