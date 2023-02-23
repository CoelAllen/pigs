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
              <div className={styles["form--input"]}>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Name" name="name" />
              </div>
              <div className={styles["form--input"]}>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className={styles["form--input"]}>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" placeholder="Phone Number" name="phone" />
              </div>
              <h4>Please select which days you are available:</h4>
              <div className={styles["input--week"]}>
                <div>
                  <label htmlFor="sunday">Sunday</label>
                  <input type="checkbox" name="sunday" />
                </div>
                <div>
                  <label htmlFor="monday">Monday</label>
                  <input type="checkbox" name="monday" />
                </div>
                <div>
                  <label htmlFor="tuesday">Tuesday</label>
                  <input type="checkbox" name="tuesday" />
                </div>
                <div>
                  <label htmlFor="wednesday">Wednesday</label>
                  <input type="checkbox" name="wednesday" />
                </div>
                <div>
                  <label htmlFor="thursday">Thursday</label>
                  <input type="checkbox" name="thursday" />
                </div>
                <div>
                  <label htmlFor="friday">Friday</label>
                  <input type="checkbox" name="friday" />
                </div>
                <div>
                  <label htmlFor="saturday">Saturday</label>
                  <input type="checkbox" name="saturday" />
                </div>
              </div>
              <label htmlFor="description">A little about yourself:</label>
              <input type="textarea" name="description" />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
