import { Modal } from "@mui/material";
import React, { useState } from "react";
import styles from "./form.module.css";

export default function Form() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    // setOpen(false)
    // save info to database as volunteer info
  };
  return (
    <>
      <div onClick={handleOpen} className={styles["modal--open"]}>
        Volunteer Form
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="volunteer-form"
        aria-describedby="volunteer-form"
        className={styles["form--main"]}
      >
        <form action="submit" onSubmit={handleSubmit}>
          <div className={styles["form--body"]}>
            <div className={styles["body--header"]}>
              <h2>Volunteer!</h2>
              <p>
                Please fill out this form and someone will contact you soon
                about upcoming opportunities.
              </p>
            </div>
            <div className={styles["form--inputs"]}>
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder="Name" name="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="Email" name="email" />
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" placeholder="Phone Number" name="phone" />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
