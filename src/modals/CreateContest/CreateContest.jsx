import React, { useState } from "react";
import styles from "./CreateContest.module.css";

import HeadingAndDropdown from "../../components/HeadingAndDropdown/HeadingAndDropdown";
import HeadingAndInput from "../../components/HeadingAndInput/HeadingAndInput";
import CalendarInput from "../../components/CalenderInput/CalenderInput";
import TimeInput from "../../components/TimeInput/TimeInput";
import CheckboxAndData from "../../components/CheckboxAndData/CheckboxAndData";
import Button from "../../components/Button/Button";
import ToClose from "../../components/ToClose/ToClose";

const CreateContest = () => {
  const [contestType, setContestType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [hourType, setHourType] = useState("");
  const [entryFee, setEntryFee] = useState("");
  const [slots, setSlots] = useState("");
  const [entryLimit, setEntryLimit] = useState("");
  const [winningBlocks, setWinningBlocks] = useState([
    { isRange: false, from: "", to: "", amount: "" },
  ]);

  const handleAddBlock = () => {
    setWinningBlocks([
      ...winningBlocks,
      { isRange: false, from: "", to: "", amount: "" },
    ]);
  };

  const handleBlockChange = (index, field, value) => {
    const updated = [...winningBlocks];
    updated[index][field] = value;
    setWinningBlocks(updated);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <p className={styles.title}>Create Contest</p>
          <div className={styles.closeWrapper}>
            <ToClose />
          </div>
        </div>

        <div className={styles.scrollContent}>
          <div className={styles.row}>
            <HeadingAndDropdown
              title="Contest Type"
              options={["Choose contest type", "Hourly", "Daily"]}
              value={contestType}
              onChange={setContestType}
            />
            <CalendarInput
              heading="Date From"
              label="Choose Starting date of the Contest"
              value={startDate}
              onChange={setStartDate}
              background="transparent"
              textColor="white"
              shadow={true}
            />
            <CalendarInput
              heading="Date To"
              label="Choose ending date of the Contest"
              value={endDate}
              onChange={setEndDate}
              background="transparent"
              textColor="white"
              shadow={true}
            />
          </div>

          <div className={styles.adminCheckboxWrapper}>
            <CheckboxAndData
              label="Until Admins Ends"
              checked={false}
              onChange={() => {}}
            />
          </div>

          <div className={styles.row}>
            <HeadingAndDropdown
              title="Hour Type"
              options={[
                "Choose hour type for Intraday",
                "Full Day",
                "Half Day",
              ]}
              value={hourType}
              onChange={setHourType}
            />
            <TimeInput
              value={startTime}
              onChange={setStartTime}
              placeholder="Choose Starting Time of the Contest"
              heading="Time From"
            />
            <TimeInput
              value={endTime}
              onChange={setEndTime}
              placeholder="Choose Ending Time of the Contest"
              heading="Time To"
            />
          </div>

          <div className={styles.row}>
            <HeadingAndInput
              title="Entry fee"
              placeholder="Enter entry fee for the contest"
              value={entryFee}
              onChange={(e) => setEntryFee(e.target.value)}
            />
            <HeadingAndInput
              title="No.of slots"
              placeholder="Enter no.of.slots for a contest"
              value={slots}
              onChange={(e) => setSlots(e.target.value)}
            />
            <HeadingAndInput
              title="Entry Limit"
              placeholder="Enter maximum no.of.entries for a contest"
              value={entryLimit}
              onChange={(e) => setEntryLimit(e.target.value)}
            />
          </div>

          <h3 className={styles.sectionTitle}>Winning amounts</h3>

          <div className={styles.winningContainer}>
            <div className={styles.addBlockWrapper}>
              <div className={styles.addBlock} onClick={handleAddBlock}>
                Add Block
              </div>
            </div>

            {winningBlocks.map((block, index) => (
              <div className={styles.winningRow} key={index}>
                <CheckboxAndData
                  label="Range"
                  checked={block.isRange}
                  onChange={() =>
                    handleBlockChange(index, "isRange", !block.isRange)
                  }
                />

                {block.isRange ? (
                  <>
                    <HeadingAndInput
                      title=""
                      placeholder="Enter from rank"
                      value={block.from}
                      onChange={(e) =>
                        handleBlockChange(index, "from", e.target.value)
                      }
                    />
                    <HeadingAndInput
                      title=""
                      placeholder="Enter to rank"
                      value={block.to}
                      onChange={(e) =>
                        handleBlockChange(index, "to", e.target.value)
                      }
                    />
                  </>
                ) : (
                  <HeadingAndInput
                    title=""
                    placeholder="Enter rank"
                    value={block.from}
                    onChange={(e) =>
                      handleBlockChange(index, "from", e.target.value)
                    }
                  />
                )}

                <HeadingAndInput
                  title=""
                  placeholder="Enter Amount"
                  value={block.amount}
                  onChange={(e) =>
                    handleBlockChange(index, "amount", e.target.value)
                  }
                />

                {/* Save button — placeholder for now */}
                <Button onClick={() => {}}>Save</Button>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Button variant="outlined">Cancel</Button>
            <Button>Create Contest</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContest;
