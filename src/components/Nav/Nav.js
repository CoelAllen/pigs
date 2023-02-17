import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: darkgreen;
  text-shadow: 3px 3px 5px white;
  font-weight: 400;
  font-size: large;
`;
export default function Nav() {
  return (
    <div className={styles["nav--main"]}>
      <ul className={styles["nav--icons"]}>
        <li className={styles["icon--left"]}>
          <div>dropdown</div>
          <Link to="/">Pig logo here</Link>
          <div className={styles["title"]}>
            <div>Pigs</div>
            <div>Peace</div>
          </div>
        </li>
        <li className={styles["nav--group"]}>
          <StyledLink to="/about" className={styles["nav--icon"]}>
            WHO WE ARE
          </StyledLink>
          <StyledLink to="/gallery" className={styles["nav--icon"]}>
            MEET OUR FRIENDS
          </StyledLink>
          <StyledLink to="/contact" className={styles["nav--icon"]}>
            COMMON QUESTIONS
          </StyledLink>
          <Link to="/volunteer" className={styles["nav--volunteer"]}>
            VOLUNTEER
          </Link>
          <Link to="/donate" className={styles["nav--donate"]}>
            DONATE
          </Link>
        </li>
      </ul>
    </div>
  );
}
