import React, { useState } from "react";
import StocksCard from "../../../../components/StocksCard/StocksCard";
import Button from "../../../../components/Button/Button";
import styles from "./TotalStocks.module.css";
import avatarImg from "../../../../assets/bmw.png";

// ✅ Stock list with unique IDs
const stockList = new Array(9).fill(null).map((_, index) => ({
  id: `stock-${index + 1}`, // unique ID
  title: `Equity & Gold Asset Allocation ${index + 1}`,
  subtitle: "by wind mill capital",
  avatar: avatarImg,
}));

const TotalStocks = ({ searchQuery = "" }) => {
  const [selectedStockId, setSelectedStockId] = useState(null);

  // ✅ Filter only by search query
  const filteredStocks = stockList.filter((stock) =>
    stock.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (stockId) => {
    setSelectedStockId(stockId);
  };

  const handleReset = () => {
    setSelectedStockId(null);
  };

  const handleSave = () => {
    const selected = stockList.find((s) => s.id === selectedStockId);
    if (selected) {
      alert(`Selected: ${selected.title}`);
    } else {
      alert("Please select a stock.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {filteredStocks.length > 0 ? (
          filteredStocks.map((stock) => (
            <StocksCard
              key={stock.id}
              avatar={stock.avatar}
              title={stock.title}
              subtitle={stock.subtitle}
              isSelected={selectedStockId === stock.id}
              onSelect={() => handleSelect(stock.id)}
            />
          ))
        ) : (
          <div className={styles.noResult}>No matching stocks found.</div>
        )}
      </div>

      <div className={styles.buttonRow}>
        <Button
          onClick={handleReset}
          variant="outlined"
          textColor="rgba(from var(--White_Color) r g b / 67%)"
          borderColor="rgba(from var(--White_Color) r g b / 35%)"
        >
          Reset
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default TotalStocks;
