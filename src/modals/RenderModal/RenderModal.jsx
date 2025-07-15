import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./RenderModal.module.css";

// Redux
import { closeModal } from "../../redux/slices/modalSlice";

// Components
import MainModal from "../MainModal/MainModal";
import CreateNotification from "../CreateNotification/CreateNotification";
import SimpleActionModal from "../SimpleActionModal/SimpleActionModal";
import HeadingAndInput from "../../components/HeadingAndInput/HeadingAndInput";
import HeadingAndDropdown from "../../components/HeadingAndDropdown/HeadingAndDropdown";
import ChooseParticipants from "../ChooseParticipants/ChooseParticipants";

import ViewPanDetails from "../ViewPanDetails/ViewPanDetails";
import NotificationsModal from "../NotificationsModal/NotificationsModal";
import ReasonModal from "../ReasonModal/ReasonModal";
import DownloadDataRange from "../DownloadDataRange/DownloadDataRange";
import WinningsAndLeaderboard from "../WinningsAndLeaderboard/WinningsAndLeaderboard";
import EditContest from "../EditContest/EditContest";
import CreateContest from "../CreateContest/CreateContest";

function RenderModal() {
  const activeModal = useSelector((state) => state.modal.type);
  const dispatch = useDispatch();

  const [status, setStatus] = useState("Active");
  const [amount, setAmount] = useState("");

  const allModals = {
    notifications: <NotificationsModal />,
    updateStatus: (
      <SimpleActionModal
        title="Update Status"
        primaryActionLabel="Save"
        secondaryActionLabel="Cancel"
        onPrimaryAction={() => {
          console.log("New status:", status);
          dispatch(closeModal(""));
        }}
        onSecondaryAction={() => dispatch(closeModal(""))}
      >
        <HeadingAndDropdown
          title="Status"
          options={["Active", "Inactive", "Suspended"]}
          value={status}
          onChange={setStatus}
        />
      </SimpleActionModal>
    ),

    updateBalance: (
      <SimpleActionModal
        title="Update Balance"
        primaryActionLabel="Add amount"
        secondaryActionLabel="Deduct"
        onPrimaryAction={() => {
          console.log("Add amount:", amount);
          dispatch(closeModal(""));
        }}
        onSecondaryAction={() => {
          console.log("Deduct amount:", amount);
          dispatch(closeModal(""));
        }}
      >
        <HeadingAndInput
          title="Amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          height="50px"
        />
      </SimpleActionModal>
    ),
    //download user
    downloadDataRange: <DownloadDataRange />,

    // custom modals
    createContest:<CreateContest/>,
    editContest: <EditContest/>,
    winningsAndLeaderboard: (
      <WinningsAndLeaderboard {...useSelector((state) => state.modal.data)} />
    ),

    createNotification: <CreateNotification />,
    chooseParticipants: <ChooseParticipants />,
    viewPanDetails: <ViewPanDetails />,
    reasonModal: <ReasonModal />,
  };

  return (
    <MainModal>
      <AnimatePresence mode="wait">
        {activeModal && (
          <motion.div
            key={activeModal}
            className={styles.RenderModal}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            {allModals[activeModal]}
          </motion.div>
        )}
      </AnimatePresence>
    </MainModal>
  );
}

export default RenderModal;
