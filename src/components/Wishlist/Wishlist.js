import React, { useState } from "react";
import styles from "./wishlist.module.css";
import { Modal } from "@mui/material";
import { Link } from "react-router-dom";
export default function Wishlist() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div onClick={handleOpen} className={styles["modal--button"]}>
        Wishlist
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-wishlist"
        aria-describedby="modal-wishlist"
        className={styles["modal--main"]}
      >
        <div className={styles["modal--body"]}>
          <div className={styles["body--text"]}>
            <h2>Our Wishlist!</h2>
            <ul>
              <li>
                Monthly committed donations.{" "}
                <Link to="/donate" onClick={handleClose}>
                  Make donations here...
                </Link>
              </li>
              <li>Towels</li>
              <li>Laundry Detergent</li>
              <li>Paper towels and toilet paper</li>
              <li>
                Carrots:
                <br />
                one 25lb bag feeds one group of pigs
                <br />
                eight 25lb bags feeds all the pigs
              </li>
              <li>Soy milk for recovering pigs</li>
              <li>
                Tofu in aseptic packaging:
                <br />
                used for pigs recovering from surgery
              </li>
              <li>Vegetarian dog biscuits</li>
              <li>Postage stamps</li>
              <li>Uncooked pasta for special needs pigs</li>
              <li>Lowe's or Home Depot gift cards</li>
              <li>Tea tree oil</li>
              <li>Flat cardboard cat scratches for our many barn cats</li>
              <li>Good quality clay cat litter</li>
              <li>Catnip toys</li>
              <li>Monthly committed donations</li>
            </ul>
            <h2>We need help Wishlist!</h2>
            <ul>
              <li>Experienced painters</li>
              <li>Experienced sign makers</li>
              <li>Experienced carpenters, contractors and builders</li>
              <li>Someone with a weed-eater and a huge desire to weed eat!</li>
              <li>Gardeners, landscapers and weeding help</li>
              <li>
                Fundraisers. Ideas are great, but how about someone DO IT!
              </li>
            </ul>
          </div>
          <div className={styles["modal--quote"]}>
            Why put off til tomorrow, what you can eat today{" "}
            <strong>-Miss Piggy</strong>
          </div>
          <div className={styles["button--shift"]}>
            <div className={styles["modal--close"]} onClick={handleClose}>
              Close
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
