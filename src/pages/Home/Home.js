import React from "react";
import "./Home.css";
import judy from "../../images/judy_with_judee.jpeg";
import ella from "../../images/ellaSm.jpeg";
import fern from "../../images/fernSm.jpeg";
import placeToCall from "../../images/placeToCall.jpeg";
import ziggy from "../../images/ziggySm.jpeg";
import news from "../../images/recentNews.jpeg";
import buttons from "../../images/buttonsSm.jpeg";
import visit from "../../images/visitStory.jpeg";
import summer from "../../images/hotDaysSm.jpeg";

export default function Home() {
  return (
    <div className="home--main">
      <div className="home--info">
        <h1>Welcome to Pigs' Peace Sanctuary</h1>
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

      <div className="home--break">
        <div className="break--block">
          <div className="home--extras">
            <img className="extras--thumb" src={ella} alt="Ella" />
            <div className="extras--text">
              <h3>Ella</h3>
              <p>
                A 3 week old potbellied piglet was bought on impulse for $100.
                After just 24 hours she was no longer wanted…
              </p>
            </div>
          </div>
          <div className="home--extras">
            <img
              className="extras--thumb"
              src={placeToCall}
              alt="A place to call their own"
            />
            <div className="extras--text">
              <h3>A Place to Call Their Own</h3>
              <p>
                Unlike almost every other pig farm in creation, Pigs Peace
                exists not to ready piggies to become bacon or pork roast…
              </p>
            </div>
          </div>
          <div className="home--extras">
            <img className="extras--thumb" src={fern} alt="Fern" />
            <div className="extras--text">
              <h3>Meet Fern</h3>
              <p>
                Fern was my first potbellied pig and her gentle welcoming nature
                has been a strong…
              </p>
            </div>
          </div>
          <div className="home--extras">
            <img className="extras--thumb" src={summer} alt="Fern" />
            <div className="extras--text">
              <h3>Hot Summer Days</h3>
              <p>Scenes from a hot summer day at the Sanctuary...</p>
            </div>
          </div>
        </div>
        <div className="break--block">
          <div className="home--extras">
            <div>
              <h3>Meet Buttons</h3>
              <p>
                Buttons was born one of hundreds of pigs in a hoarding home. All
                pigs were in-bred…
              </p>
            </div>
            <img className="extras--thumb" src={buttons} alt="Buttons" />
          </div>
          <div className="home--extras">
            <div>
              <h3>Recent News</h3>
              <p>What's been happening at the sanctuary this month...</p>
            </div>
            <img className="extras--thumb" src={news} alt="Recent News" />
          </div>
          <div className="home--extras">
            <div>
              <h3>Ziggy</h3>
              <p>
                The plan at the zoo was to feed her to the lions when she lost
                her cuteness!…
              </p>
            </div>
            <img className="extras--thumb" src={ziggy} alt="Ziggy" />
          </div>
          <div className="home--extras">
            <div>
              <h3>A Visit to the Sanctuary</h3>
              <p>
                The plan at the zoo was to feed her to the lions when she lost
                her cuteness!…
              </p>
            </div>
            <img className="extras--thumb" src={visit} alt="Ziggy" />
          </div>
        </div>
      </div>
    </div>
  );
}
