import React, { useState } from "react";
import styles from "./RevenueOverview.module.css";
import RevenueChart from "../../../components/RevenueChart/RevenueChart";

import RevenueOverviewCard from "../../../components/RevenueOverviewCard/RevenueOverviewCard";
import Dropdown from "../../../components/Dropdown/Dropdown";
import SearchBar from "../../../components/SearchBar/SearchBar";

const RevenueOverview = () => {
  const [selected, setSelected] = useState("All Contests");
  const monthlyData = [
    { label: "1st", revenue: 5000000 },
    { label: "2nd", revenue: 2500000 },
    { label: "3rd", revenue: 3000000 },
    { label: "4th", revenue: 2700000 },
    { label: "5th", revenue: 5000000 },
    { label: "6th", revenue: 3200000 },
    { label: "7th", revenue: 3300000 },
    { label: "8th", revenue: 3400000 },
    { label: "9th", revenue: 3500000 },
  ];
  
  const yearlyData = [
    { label: "Jun", revenue: 5000000 },
    { label: "Jul", revenue: 3000000 },
    { label: "Aug", revenue: 4500000 },
    { label: "Sep", revenue: 4000000 },
    { label: "Oct", revenue: 5000000 },
    { label: "Nov", revenue: 4700000 },
    { label: "Dec", revenue: 4900000 },
  ];
  
  const contestOptions = ["All Contests", "Stock Contest", "Crypto Contest"];

  const onSelect = (option) => {
    setSelected(option);
  };

  const [year, setYear] = useState("2025");
  const [view, setView] = useState("Yearly");

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.title}>Dashboard</div>
        <div className={styles.search}>
          <SearchBar placeholder="Search by name" />
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            options={contestOptions}
            selected={selected}
            onSelect={onSelect}
          />
        </div>
      </div>
      <div className={styles.revenueFlowCard}>
        <div className={styles.topBar}>
          <div className={styles.headinggraph}>Revenue Flow</div>
          <div className={styles.dropdownGroup}>
            <Dropdown
              options={["2023", "2024", "2025"]}
              selected={year}
              onSelect={setYear}
            />
            <Dropdown
              options={["Monthly", "Quarterly", "Yearly"]}
              selected={view}
              onSelect={setView}
            />
          </div>
        </div>

        {/* Replace this with actual chart later */}
        <RevenueChart
          data={view === "Monthly" ? monthlyData : yearlyData}
          xKey="label"
          yKey="revenue"
        />

        <p className={styles.chartYear}>{year}</p>
      </div>

      <div className={styles.cardsGrid}>
        <RevenueOverviewCard
          title="Deposit"
          value="1000"
          description="This is the amount that the user / users deposited in the selected tenure. This data helps you to monitor"
        />
        <RevenueOverviewCard
          title="Withdraw"
          value="1000"
          description="This is the amount that the user / users withdrawn in the selected tenure. This data helps you to monitor"
        />
        <RevenueOverviewCard
          title="Earnings"
          value="1000"
          description="This is the amount that the user / users earned by winning the contests in the selected tenure. This data helps you to monitor"
        />
        <RevenueOverviewCard
          title="TDS"
          value="1000"
          description="TDS is 10% of the winning / earnings in a contest"
        />
      </div>
    </div>
  );
};

export default RevenueOverview;
