import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles["footer--main"]}>
      <div className={styles["main--info"]}>
        <div className={styles["info--block"]}>Logos?</div>
        <div className={styles["info--block"]}>
          <ul>
            <h4>How to help</h4>
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Our Wish List</li>
          </ul>
        </div>
        <div className={styles["info--block"]}>
          <ul>
            <h4>About us</h4>
            <Link to="/message">
              <li>Message from Judy</li>
            </Link>
            <li>Why pigs?</li>
            <li>Our friends</li>
          </ul>
        </div>
        <div className={styles["info--block"]}>
          <ul>
            <h4>Visit</h4>
            <li>Schedule</li>
            <li>Directions</li>
            <li>Guidelines</li>
          </ul>
        </div>
      </div>
      <div className={styles["main--links"]}>
        <div>
          Copyright 2023 Pigs Peace Sanctuary | | Site built by Coel Allen
        </div>
        <div className={styles["links"]}>
          <div className={styles["links--block"]}>Contact</div>
          <div className={styles["links--block"]}>Privacy Policy</div>
          <div className={styles["links--block"]}>Terms</div>
        </div>
      </div>
    </div>
  );
}
