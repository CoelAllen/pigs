import React from "react";
import "./Donate.css";
import child from "../../images/childVisitor.jpeg";

export default function Donate() {
  return (
    <div className="main">
      <div className="donate--main">
        <h1>Donate to help the animals</h1>
        <div className="main--text">
          <div className="main--list">
            <h2>Give with confidence!</h2>
            <ul>
              <li>We are accountable</li>
              <li>We act with integrity</li>
              <li>We spend wisely and for the animals</li>
              <li>We respect your privacy</li>
            </ul>
          </div>
        </div>
        <img src={child} alt="" />
        <p>
          Help the animals by donating money, especially on a regular basis.
          Every dollar helps in our commitment of love. The pigs are on a
          high-quality, well rounded diet and food prices are high. They eat 300
          lbs. of pig food a day and 50-100 lbs. of vegetables, plus treats -
          popcorn, fruits, peanuts, peanut butter sandwiches, etc. The pigs also
          have the finest veterinary care. We desperately need monetary support.
          If you'd like to help out please donate online via PayPal or by
          mailing a check.
        </p>
      </div>
    </div>
  );
}
