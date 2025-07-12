import { NavLink, useLocation } from "react-router";
import styles from "./SideBarMainLink.module.css";

function SideBarMainLink({ data }) {
  const { label, toRoute, icon } = data;
  const location = useLocation();

  return (
    <NavLink
      to={toRoute}
      className={({ isActive }) =>
        `${styles.link_container} ${isActive ? styles.activeSub : ""}`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}

export default SideBarMainLink;
