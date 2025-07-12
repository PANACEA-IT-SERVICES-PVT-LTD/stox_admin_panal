import styles from "./DashboardLayout.module.css";
import TopBar from "../../pages/TopBar/TopBar";
import SideBar from "../../pages/SideBar/SideBar";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <div className={styles.DashboardLayout}>
      <div className={styles.LeftSection}>
        <SideBar />
      </div>
      <div className={styles.RightSection}>
        <TopBar />
        <main className="Main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
