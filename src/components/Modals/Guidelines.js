import React, { useState } from "react";
import "./Guidelines.css";
import Modal from "@mui/material/Modal";

export default function Guidelines() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen}>Guidelines</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-guidelines"
        aria-describedby="modal-guidelines"
      >
        <div className="modal--body">Hello There</div>
      </Modal>
    </>
  );
}
