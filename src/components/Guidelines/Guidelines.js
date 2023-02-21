import React, { useState } from "react";
import styles from "./guidelines.module.css";
import { Modal } from "@mui/material";
import sig from "../../images/judySig.gif";

export default function Guidelines() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles["modal--button"]} onClick={handleOpen}>
        Guidelines
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-guidelines"
        aria-describedby="modal-guidelines"
        className={styles["modal--main"]}
      >
        <div className={styles["modal--body"]}>
          <div className={styles["body--text"]}>
            <h2>Visitor Guidelines</h2>
            <p>
              You are a guest in the home of many rescued animals in various
              stages of healing.
            </p>
            <br />
            <p>
              We want you to enjoy your visit. Ask any questions you want. No
              subject is out of bounds and no question is dumb.
            </p>
            <br />
            <p>
              Our goal is to make your visit enjoyable and educational. You will
              have many good photo opportunities.
            </p>
          </div>
          <ul>
            <li>Bring no food onto sanctuary grounds.</li>
            <li>Do Not Feed the Animals. Many are on special diets.</li>
            <li>We want pigs to greet you as a friend not food item.</li>
            <li>We want you to meet pigs as a friend not food item.</li>
            <li>Children must be supervised at all times.</li>
            <li>
              We respectfully request that no animal products be brought onto
              sanctuary grounds. We are dedicated to respect for all life.
            </li>
            <li>
              Several animals have free run of the sanctuary. Please do not
              approach any animals without first checking with staff. Our
              animals come from situations of abuse and neglect, healing may
              take time.
            </li>
            <li>No smoking.</li>
            <li>
              No weapons, drugs or alcohol are allowed on the sanctuary. This is
              a place of refuge for animals and humans alike.
            </li>
            <li>
              No personal pets allowed. Some sanctuary animals are dog attack
              survivors.
            </li>
          </ul>
          <div className={styles["body--sig"]}>
            <h4>Thank you for loving pigs,</h4>
            <img src={sig} alt="Signed by Judy" />
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
