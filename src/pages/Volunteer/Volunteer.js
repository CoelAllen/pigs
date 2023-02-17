import React from "react";
import "./Volunteer.css";
import banner from "../../images/betsyGreeted.jpeg";
import vol1 from "../../images/volunteer300.jpeg";
import vol2 from "../../images/volunteer300b.jpeg";
import vol3 from "../../images/volunteerScoopers300.jpeg";
import Guidelines from "../../components/Modals/Guidelines.js";

export default function Volunteer() {
  return (
    <>
      <div className="main--banner">
        <img className="banner--img" src={banner} alt="" />
        <div className="banner--text">
          <p>
            I am convinced that my life belongs to the whole community; and as
            long as I live, it is my privilege to do for it whatever I can, for
            the harder I work the more I live.
          </p>
          <div className="quote">— George Bernard Shaw</div>
          <h1>Volunteer</h1>
        </div>
      </div>
      <div className="body--text">
        <p>
          Volunteers are an important part of the Pigs Peace family. Your
          contribution of time and effort helps improve the lives of all of our
          friends here at the farm and allows us to guarantee lives free of
          cruelty and neglect.
        </p>
        <br />
        <p>
          There are a variety of volunteer opportunities available including
          farm tasks and general support, to technical and clerical help.
          Opportunities change with the season and depending on the needs of the
          animals. Volunteers who wish to donate professional skills are always
          needed such as carpentry, plumbing, electrical, etc.
        </p>
        <br />
        <p>
          If you are interested in volunteering, step one is:{" "}
          <strong>Take A Tour!</strong> Come meet the animals and staff and see
          if the environment is right for you. You can schedule a tour{" "}
          <span>
            <a href="/contact">here.</a>
          </span>
        </p>
        <br />
        {/* NOTE gonna pop a guidelines modal here */}
        <p>
          For more information please check our volunteer guidelines here{" "}
          <Guidelines /> or send us your information and availability here{" "}
          <button>FORM</button>
        </p>
      </div>
      <div className=""></div>
      <div className="body--photos">
        <img src={vol2} alt="" />
        <img src={vol3} alt="" />
        <img src={vol1} alt="" />
      </div>
    </>
  );
}
