import React, { useLayoutEffect } from "react";
import styles from "./donate.module.css";
import child from "../../images/childVisitor.jpeg";

export default function Donate() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles["main"]}>
      <div className={styles["donate--main"]}>
        <h1>
          Happiness is not so much having as sharing. We make a living by what
          we get, but we make a life by what we give. — Norman Mac Eswan
        </h1>
        <div className={styles["main--text"]}>
          <div className={styles["main--list"]}>
            <h2>Give with confidence!</h2>
            <div className={styles["list--body"]}>
              <ul className={styles["list"]}>
                <li className={styles["list--item"]}>We are accountable</li>
                <li className={styles["list--item"]}>We act with integrity</li>
                <li className={styles["list--item"]}>
                  We spend wisely and for the animals
                </li>
                <li className={styles["list--item"]}>
                  We respect your privacy
                </li>
              </ul>
              <img src={child} alt="Pig with friend" />
            </div>
          </div>
        </div>
        <div className={styles["main--details"]}>
          <div className={styles["details--text"]}>
            <p>
              Help the animals by donating money, especially on a regular basis.
              Every dollar helps in our commitment of love. The pigs are on a
              high-quality, well rounded diet and food prices are high. They eat
              300 lbs. of pig food a day and 50-100 lbs. of vegetables, plus
              treats - popcorn, fruits, peanuts, peanut butter sandwiches, etc.
              The pigs also have the finest veterinary care. We desperately need
              monetary support. If you'd like to help out please donate online
              via PayPal or by mailing a check.
            </p>
          </div>
          <div className={styles["details--donate"]}>Another box!</div>
        </div>
      </div>
    </div>
  );
}
