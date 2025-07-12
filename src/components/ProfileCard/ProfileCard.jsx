import React from "react";
import styles from "./ProfileCard.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Button from "../Button/Button";

const ProfileCard = ({
  name,
  role,
  coverImage,
  profileImage,
  isKycDone,
  showKycStatus = false,
  showChangePasswordButton = false,
  onChangePassword,
  kycText = "KYC DONE",
  kycNotDoneText = "KYC NOT DONE",
}) => {
  return (
    <div className={styles.card}>
      {coverImage && (
        <img src={coverImage} alt="cover" className={styles.cover} />
      )}

      <div className={styles.content}>
        <div className={styles.profileInfo}>
          {profileImage && (
            <img
              src={profileImage}
              alt="profile"
              className={styles.profileImg}
            />
          )}
          <div>
            {name && <p className={styles.name}>{name}</p>}
            {role && <p className={styles.role}>{role}</p>}
          </div>
        </div>

        <div className={styles.rightContent}>
          {showChangePasswordButton ? (
            <Button onClick={onChangePassword}>Change Password</Button>
          ) : showKycStatus ? (
            <div className={styles.kycStatus}>
              {isKycDone ? (
                <>
                  <FaCheckCircle
                    className={styles.kycIcon}
                    style={{ color: "var(--Success_Color)" }}
                  />
                  <span>{kycText}</span>
                </>
              ) : (
                <>
                  <FaTimesCircle
                    className={styles.kycIcon}
                    style={{ color: "var(--Error_Color)" }}
                  />
                  <span style={{ color: "var(--Error_Color)" }}>
                    {kycNotDoneText}
                  </span>
                </>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
