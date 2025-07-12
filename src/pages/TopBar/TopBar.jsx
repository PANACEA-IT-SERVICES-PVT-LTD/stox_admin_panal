// import LanguagesMenu from "../../components/LanguagesMenu/LanguagesMenu";
// import NotificationIcon from "../../components/NotificationIcon/NotificationIcon";
import { FaBell } from "react-icons/fa";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={styles.TopBar}>
      <div className={styles.search}>
        <SearchBar placeholder="Search here for anything" />
      </div>
      <div className={styles.rightsection}>
        <div className={styles.icon}>
          <FaBell size={28} />
        </div>
        <ProfileMenu />
      </div>
    </div>
  );
}

export default TopBar;
