import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Guidelines from "../Guidelines/Guidelines.js";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: large;
`;

export default function Footer() {
  return (
    <div className={styles["footer--main"]}>
      <div className={styles["main--info"]}>
        <div className={styles["info--block"]}>Logos?</div>
        <div className={styles["info--block"]}>
          <ul>
            <h4>How to help</h4>
            <li>Donate</li>
            <StyledLink to="/volunteer">
              <li>Volunteer</li>
            </StyledLink>
            <li>Our Wish List</li>
          </ul>
        </div>
        <div className={styles["info--block"]}>
          <ul>
            <h4>About us</h4>
            <StyledLink to="/message">
              <li>Message from Judy</li>
            </StyledLink>
            <StyledLink to="/faq">
              <li>Pig Info/FAQ</li>
            </StyledLink>
            <StyledLink to="/pigs">
              <li>Our friends</li>
            </StyledLink>
          </ul>
        </div>
        <div className={styles["info--block"]}>
          <ul>
            <h4>Visit</h4>
            <li>Schedule</li>
            <li>Directions</li>
            <li>
              <Guidelines />
            </li>
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
