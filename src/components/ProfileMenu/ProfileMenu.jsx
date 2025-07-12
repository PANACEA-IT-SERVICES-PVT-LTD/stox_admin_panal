import styles from "./ProfileMenu.module.css";
import Photo from "../../assets/Photo.png";
import { IoIosArrowDown } from "react-icons/io";

function ProfileMenu() {
  return (
    <div className={styles.ProfileMenu}>
      <div className={styles.ProfileMenuAvatar}>
        <img src={Photo} alt="User Avatar" />
      </div>
      <div className={styles.ProfileMenuInfo}>
       
        <p>Admin</p>
      </div>
      {/* <div className={styles.ProfileMenuActions}>
        <IoIosArrowDown size={24} />
      </div> */}
    </div>
  );
}

export default ProfileMenu;
