import { useState } from "react";
import NotificationManageCard from "../../components/NotificationManageCard/NotificationManageCard";
import Button from "../../components/Button/Button";
import CalendarInput from "../../components/CalenderInput/CalenderInput" // ✅
import styles from "./NotificationManage.module.css";
import notificationIcon from "../../assets/notificationmanage.png";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modalSlice";
import { closeModal } from "../../redux/slices/modalSlice";
function NotificationManage() {
  const [selectedDate, setSelectedDate] = useState("");

  const dataList = Array(6).fill({
    title: "Sorry there are contests today",
    description:
      "You may experience some issues in this area because updates are being made. We will notify you as soon as everything has been fixed.",
    iconUrl: notificationIcon,
    actions: ["Edit", "Disable", "Delete"],
  });

  const handleAction = (action) => {
    console.log("Clicked action:", action);
    if (action === "Edit") {
      dispatch(openModal("createNotification"));
    }
  };
  
  const dispatch = useDispatch();


  return (
    <>
      {/* ✅ Row 1: Heading */}
      <div className={styles.topHeading}>
        <div className={styles.heading}>
          <p>Select and send these notifications to participants</p>
        </div>
        <div className={styles.rightsection}>
          <CalendarInput
            label="Date"
            value={selectedDate}
            onChange={setSelectedDate}
            background="transparent"
            textColor="var(--White_Color)"
            iconColor="var(--White_Color)"
            placeholderColor="var(--White_Color)"
            shadow={false}
          />
          <Button>Create Notification</Button>
        </div>
      </div>

      {/* ✅ Row 2: Date + Buttons */}
      <div className={styles.topActions}>
        <Button onClick={() => dispatch(openModal("chooseParticipants"))}>
          Choose participants
        </Button>
      </div>

      {/* ✅ Cards */}
      <div className={styles.grid}>
        {dataList.map((item, index) => (
          <NotificationManageCard
            key={index}
            messageData={item}
            isHighlighted={true}
            onActionClick={handleAction}
          />
        ))}
      </div>
    </>
  );
}

export default NotificationManage;
