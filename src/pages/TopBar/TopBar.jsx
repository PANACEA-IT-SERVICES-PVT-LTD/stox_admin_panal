import { FaBell } from "react-icons/fa";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./TopBar.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modalSlice";
import notif1 from "../../assets/avatar.png";
import notif2 from "../../assets/coin.png";
import notif3 from "../../assets/crown.png";
import notif4 from "../../assets/profile.png";

function TopBar() {
  const dispatch = useDispatch();

  return (
    <div className={styles.TopBar}>
      <div className={styles.search}>
        <SearchBar placeholder="Search here for anything" />
      </div>
      <div className={styles.rightsection}>
        <div
          className={styles.icon}
          onClick={() =>
            dispatch(
              openModal({
                type: "notifications",
                data: {
                  notifications: [
                    {
                      title: "100% Unlocked",
                      message:
                        "Congratulations Darshan! Use your coupon and join your discount and join your favourites.",
                      timestamp: "2:00 pm Apr 21",
                      imageUrl: notif1,
                    },
                    {
                      title: "Cashback Offer",
                      message:
                        "You've received a cashback offer on your last transaction.",
                      timestamp: "1:30 pm Apr 20",
                      imageUrl: notif2,
                    },
                    {
                      title: "Welcome Bonus",
                      message: "You received ₹100 as a welcome bonus.",
                      timestamp: "10:00 am Apr 19",
                      imageUrl: notif3,
                    },
                    {
                      title: "Contest Reminder",
                      message: "Reminder: Your contest starts in 1 hour.",
                      timestamp: "9:00 am Apr 18",
                      imageUrl: notif4,
                    },
                  ],
                },
              })
            )
          }
          style={{ cursor: "pointer" }}
        >
          <FaBell size={28} />
        </div>
        <ProfileMenu />
      </div>
    </div>
  );
}

export default TopBar;
