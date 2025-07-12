import styles from "./SideBar.module.css";
import SideBarMainLink from "../../components/SideBarMainLink/SideBarMainLink";
import { RxDashboard } from "react-icons/rx";
import stoxLogo from "../../assets/stox.png";

import {
  FaUserCog,
  FaTrophy,
  FaWallet,
  FaBell,
  FaChartBar,
  FaHeartbeat,
} from "react-icons/fa";

function SideBar() {
  const sideBarMenuItems = [
    {
      label: "Dashboard",
      toRoute: "/dashboard",
      icon: <RxDashboard size={20} />,
    },
    {
      label: "User Management",
      toRoute: "/usermanagement",
      icon: <FaUserCog size={18} />,
    },
    {
      label: "Contests",
      toRoute: "/contests",
      icon: <FaTrophy size={18} />,
    },
    {
      label: "Wallet",
      toRoute: "/walletpage",
      icon: <FaWallet size={18} />,
    },
    {
      label: "Notification manage",
      toRoute: "/notifications",
      icon: <FaBell size={18} />,
    },
    {
      label: "Reports",
      toRoute: "/reports",
      icon: <FaChartBar size={18} />,
    },
    {
      label: "Activity",
      toRoute: "/activity",
      icon: <FaHeartbeat size={18} />,
    },
  ];

  return (
    <div className={styles.SideBar}>
      <div className={styles.schoolInfoBox}>
        <img src={stoxLogo} alt="STOX Logo" className={styles.logo} />

        <h3 className={styles.appName}>STOX 11</h3>
      </div>

      <div className={styles.MenuItemsList}>
        {sideBarMenuItems.map((item) => (
          <SideBarMainLink key={item.label} data={item} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
