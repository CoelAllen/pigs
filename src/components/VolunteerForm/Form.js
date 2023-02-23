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
                <input
                  className={styles["input"]}
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className={styles["form--input"]}>
                <label htmlFor="email">Email:</label>
                <input
                  className={styles["input"]}
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className={styles["form--input"]}>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  className={styles["input"]}
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                />
              </div>
              <h4>Please select which days you are available:</h4>
              <div className={styles["input--week"]}>
                <div className={styles["input--day"]}>
                  <label htmlFor="sunday">Sunday</label>
                  <input type="checkbox" name="sunday" />
                </div>
                <div className={styles["input--day"]}>
                  <label htmlFor="monday">Monday</label>
                  <input type="checkbox" name="monday" />
                </div>
                <div className={styles["input--day"]}>
                  <label htmlFor="tuesday">Tuesday</label>
                  <input type="checkbox" name="tuesday" />
                </div>
                <div className={styles["input--day"]}>
                  <label htmlFor="wednesday">Wednesday</label>
                  <input type="checkbox" name="wednesday" />
                </div>
                <div className={styles["input--day"]}>
                  <label htmlFor="thursday">Thursday</label>
                  <input type="checkbox" name="thursday" />
                </div>
                <div className={styles["input--day"]}>
                  <label htmlFor="friday">Friday</label>
                  <input type="checkbox" name="friday" />
                </div>
                <div className={styles["input--day"]}>
                  <label htmlFor="saturday">Saturday</label>
                  <input type="checkbox" name="saturday" />
                </div>
              </div>
              <div className={styles["input--textarea"]}>
                <label htmlFor="description">A little about yourself:</label>
                <textarea rows={5} cols={50} name="description"></textarea>
              </div>
              <div className={styles["form--buttons"]}>
                <div className={styles["modal--submit"]}>Submit</div>
                <div className={styles["modal--close"]}>Close</div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
