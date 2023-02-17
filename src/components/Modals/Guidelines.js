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
        <div className="modal--body">
          <h2>Volunteering Guidelines</h2>
          <p>
            Because of the time and effort it takes to train people to work
            safely around rescued animals and sanctuary equipment, we require
            that volunteers commit to serve for a reasonable amount of time.
            It's the regular volunteer who "knows the drill" who provides the
            most effective help. For important safety reasons, those under age
            18 must be accompanied by a parent or guardian.
          </p>
          <ul>
            <h3>
              The work needed to be done changes from day to day. It may
              include, but is not limited to:
            </h3>
            <li>Move cedar chips/gravel</li>
            <li>Move hay bales</li>
            <li>Painting barns</li>
            <li>Digging ponds</li>
            <li>Fence repair</li>
            <li>Weeding</li>
            <li>
              And our favorite...<strong>Scooping poop!</strong>
            </li>
          </ul>
          <p>
            New projects that require special skills frequently come up. If you
            would like to offer a specific talent please let us know. Plumbers,
            painters, electricians, drywall installers are commonly needed, but
            we also need those unusual skills: auctioneer, chimney sweep, gutter
            installer, fence builder, artist. Whatever your talents are, we can
            use you so please let us know!
          </p>
        </div>
      </Modal>
    </>
  );
}
