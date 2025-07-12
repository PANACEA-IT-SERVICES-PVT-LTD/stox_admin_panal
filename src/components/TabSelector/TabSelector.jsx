import React, { useEffect, useRef, useState } from "react";
import styles from "./TabSelector.module.css";

function TabSelector({ options, setActiveTab, activeTab }) {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);

  useEffect(() => {
    const currentTab =
      tabRefs.current[options.findIndex((opt) => opt.label === activeTab)];
    if (currentTab) {
      setIndicatorStyle({
        width: `${currentTab.offsetWidth}px`,
        transform: `translateX(${currentTab.offsetLeft}px)`,
      });
    }
  }, [activeTab, options]);

  return (
    <div className={styles.TabSelector}>
      <div className={styles.TabOptionsContainer}>
        <div className={styles.tabBackground} style={indicatorStyle}></div>
        {options.map((item, index) => (
          <div
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`${styles.TabOption} ${
              activeTab === item.label ? styles.active : ""
            }`}
            onClick={() => setActiveTab(item.label)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabSelector;
