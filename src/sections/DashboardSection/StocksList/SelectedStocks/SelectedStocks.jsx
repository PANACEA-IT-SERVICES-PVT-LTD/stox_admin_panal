import React, { useState } from "react";
import StocksCard from "../../../../components/StocksCard/StocksCard";
import Button from "../../../../components/Button/Button";
import styles from "./SelectedStocks.module.css";

import avatarImg from "../../../../assets/bmw.png"; // adjust this path

const stockList = new Array(9).fill({
  title: "Equity & Gold Asset Allocation",
  subtitle: "by wind mill capital",
  avatar: avatarImg,
});

const SelectedStocks = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedCardIndex(index);
  };


  const handleSave = () => {
    if (selectedCardIndex !== null) {
      alert(`Selected: ${stockList[selectedCardIndex].title}`);
    } else {
      alert("Please select a stock.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {stockList.map((stock, index) => (
          <StocksCard
            key={index}
            avatar={stock.avatar}
            title={stock.title}
            subtitle={stock.subtitle}
            isSelected={selectedCardIndex === index}
            onSelect={() => handleSelect(index)}
          />
        ))}
      </div>

     
    </div>
  );
};

export default SelectedStocks;
