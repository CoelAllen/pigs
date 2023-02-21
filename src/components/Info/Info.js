import React, { useState } from "react";
import styles from "./info.module.css";
import Modal from "@mui/material/Modal";

export default function Info() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles["modal--button"]} onClick={handleOpen}>
        Volunteer Info
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-guidelines"
        aria-describedby="modal-guidelines"
        className={styles["modal--main"]}
      >
        <div className={styles["modal--body"]}>
          <h2>Volunteer Info</h2>
          <p className={styles["body--text"]}>
            Because of the time and effort it takes to train people to work
            safely around rescued animals and sanctuary equipment, we require
            that volunteers commit to serve for a reasonable amount of time.
            It's the regular volunteer who "knows the drill" who provides the
            most effective help. For important safety reasons, those under age
            18 must be accompanied by a parent or guardian.
          </p>
          <ul className={styles["body--list"]}>
            <h3>
              The work needed to be done changes from day to day. It may
              include, but is not limited to:
            </h3>
            <li className={styles["list--text"]}>Move cedar chips/gravel</li>
            <li className={styles["list--text"]}>Move hay bales</li>
            <li className={styles["list--text"]}>Painting barns</li>
            <li className={styles["list--text"]}>Digging ponds</li>
            <li className={styles["list--text"]}>Fence repair</li>
            <li className={styles["list--text"]}>Weeding</li>
            <li className={styles["list--text"]}>
              And our favorite...<strong>Scooping poop!</strong>
            </li>
          </ul>
          <p className={styles["body--text"]}>
            New projects that require special skills frequently come up. If you
            would like to offer a specific talent please let us know. Plumbers,
            painters, electricians, drywall installers are commonly needed, but
            we also need those unusual skills: auctioneer, chimney sweep, gutter
            installer, fence builder, artist. Whatever your talents are, we can
            use you so please let us know!
          </p>
          <div className={styles["button--shift"]}>
            <div className={styles["modal--button"]} onClick={handleClose}>
              Close
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
