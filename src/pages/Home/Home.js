import React from "react";
import "./Home.css";
import judy from "../../images/judy_with_judee.jpeg";
export default function Home() {
  return (
    <div className="home--main">
      <div className="home--info">
        <h1>Welcome to Pigs Peace Sanctuary</h1>
        <p>
          Pigs Peace Sanctuary is a place of tranquility and happiness located
          one hour north of Seattle in the Pacific Northwest of the United
          States. We are a non-profit 501(c)(3) organization dedicated to
          providing a safe home for unwanted, abused or neglected animals in
          need and we are committed to spreading the message of compassion and
          respect for all animals.
        </p>
        <img src={judy} alt="Judy with Judee" />
        <div className="home--img-text">
          Judy Woods with Judee the pig. One of many wonderful pig friends.
        </div>
      </div>
      <div className="home--break"></div>
    </div>
  );
}
