import React, { useLayoutEffect } from "react";
import styles from "./home.module.css";
import judy from "../../images/judy_with_judee.jpeg";
import ella from "../../images/ellaSm.jpeg";
import fern from "../../images/fernSm.jpeg";
import placeToCall from "../../images/placeToCall.jpeg";
import ziggy from "../../images/ziggySm.jpeg";
import news from "../../images/recentNews.jpeg";
import buttons from "../../images/buttonsSm.jpeg";
import visit from "../../images/visitStory.jpeg";
import summer from "../../images/hotDaysSm.jpeg";
import banner from "../../images/pilgrimZiggy.jpeg";

export default function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles["home--main"]}>
      <div className={styles["main--banner"]}>
        <img className={styles["banner--img"]} src={banner} alt="" />
        <div className={styles["banner--text"]}>
          <h1>Help make something special, Volunteer!</h1>
          <p>
            With just a small commitment you can help guarantee the happiness of
            these rescued animals
          </p>

          <a href="/volunteer">Learn More</a>
        </div>
      </div>
      <div className={styles["home--info"]}>
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
        <div className={styles["home--img-text"]}>
          Judy Woods with Judee the pig. One of many wonderful pig friends.
        </div>
      </div>

      <div className={styles["home--break"]}>
        <div className={styles["break--block"]}>
          <div className={styles["home--extras"]}>
            <img className={styles["extras--thumb"]} src={ella} alt="Ella" />
            <div className={styles["extras--text"]}>
              <h3>Ella</h3>
              <p>
                A 3 week old potbellied piglet was bought on impulse for $100.
                After just 24 hours she was no longer wanted…
              </p>
            </div>
          </div>
          <div className={styles["home--extras"]}>
            <img
              className={styles["extras--thumb"]}
              src={placeToCall}
              alt="A place to call their own"
            />
            <div className={styles["extras--text"]}>
              <h3>A Place to Call Their Own</h3>
              <p>
                Unlike almost every other pig farm in creation, Pigs Peace
                exists not to ready piggies to become bacon or pork roast…
              </p>
            </div>
          </div>
          <div className={styles["home--extras"]}>
            <img className={styles["extras--thumb"]} src={fern} alt="Fern" />
            <div className={styles["extras--text"]}>
              <h3>Meet Fern</h3>
              <p>
                Fern was my first potbellied pig and her gentle welcoming nature
                has been a strong foundation to Pigs Peace Sanctuary...
              </p>
            </div>
          </div>
          <div className={styles["home--extras"]}>
            <img className={styles["extras--thumb"]} src={summer} alt="Fern" />
            <div className={styles["extras--text"]}>
              <h3>Summer's Day</h3>
              <p>
                Some scenes of our friends trying to keep cool on a hot summer's
                day here at the Sanctuary…
              </p>
            </div>
          </div>
        </div>
        <div className={styles["break--block"]}>
          <div className={styles["home--extras"]}>
            <div>
              <h3>Meet Buttons</h3>
              <p>
                Buttons was born one of hundreds of pigs in a hoarding home. All
                pigs were in-bred…
              </p>
            </div>
            <img
              className={styles["extras--thumb"]}
              src={buttons}
              alt="Buttons"
            />
          </div>
          <div className={styles["home--extras"]}>
            <div>
              <h3>Recent News</h3>
              <p>What's been happening at the sanctuary this month...</p>
            </div>
            <img
              className={styles["extras--thumb"]}
              src={news}
              alt="Recent News"
            />
          </div>
          <div className={styles["home--extras"]}>
            <div>
              <h3>Ziggy</h3>
              <p>
                The plan at the zoo was to feed her to the lions when she lost
                her cuteness!…
              </p>
            </div>
            <img className={styles["extras--thumb"]} src={ziggy} alt="Ziggy" />
          </div>
          <div className={styles["home--extras"]}>
            <div>
              <h3>A Visit to the Sanctuary</h3>
              <p>
                The plan at the zoo was to feed her to the lions when she lost
                her cuteness!…
              </p>
            </div>
            <img className={styles["extras--thumb"]} src={visit} alt="Ziggy" />
          </div>
        </div>
      </div>
    </div>
  );
}
