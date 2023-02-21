import React from "react";
import styles from "./faq.module.css";
import { HashLink } from "react-router-hash-link";
import albert from "../../images/albert.jpeg";
import betty from "../../images/closeup.jpeg";
import pals from "../../images/sleepingPals.jpeg";
import door from "../../images/pigatdoor.jpeg";

export default function Faq() {
  return (
    <div id="top">
      <div className={styles["faq--main"]}>
        <div className={styles["main--top"]}>
          <div className={styles["top--questions"]}>
            <h2>Common Questions</h2>
            <ul>
              <HashLink smooth to="/faq#section-one">
                <li>Can you tell us more about potbellied pigs?</li>
              </HashLink>
              <HashLink smooth to="/faq#section-two">
                <li>How do they live?</li>
              </HashLink>
              <HashLink smooth to="/faq#section-three">
                <li>Do they have names or do you know all their names?</li>
              </HashLink>
              <HashLink smooth to="/faq#section-four">
                <li>How do you tell them apart?</li>
              </HashLink>
              <HashLink smooth to="/faq#section-five">
                <li>Is there a top pig?</li>
              </HashLink>
              <HashLink smooth to="/faq#section-six">
                <li>Do you ever find homes for pigs?</li>
              </HashLink>
              <HashLink smooth to="/faq#section-seven">
                <li>Is it true that pigs are as smart as dogs?</li>
              </HashLink>
              <HashLink smooth to="/faq#section-eight">
                <li>Do you know the difference between a pig and a hog?</li>
              </HashLink>
              <HashLink smooth to="/faq#section-nine">
                <li>How do you weigh a pig without a scale?</li>
              </HashLink>
              <HashLink smooth to="/facts">
                <li>Pig Facts!</li>
              </HashLink>
            </ul>
          </div>
          <div className={styles["img--block"]}>
            <img
              src={albert}
              alt="A young Albert in search for a perfect morsel"
            />
            <p className={styles["captions"]}>
              A young Albert in search of a perfect morsel
            </p>
          </div>
        </div>
        {/* NOTE SECTION ONE */}
        <div id="section-one" className={styles["section"]}>
          <h3 className={styles["section--header"]}>
            Can you tell us more about potbellied pigs?
          </h3>
          <p className={styles["section--text"]}>
            In 1985 potbellied pigs were introduced to the United States and
            promoted as the perfect house pet. People were told that a pig was
            easier to house train than a dog, pigs would stay small and adorable
            and pigs didn't require a lot of room. People were not told,
            however, that pigs do not stay small. The average adult potbellied
            pig weighs 150 pounds. That means that some pigs are 40 pounds and
            some pigs are 250 pounds! Pigs are highly intelligent and curious.
          </p>
          <div className={styles["section--block"]}>
            <div>
              <ul>
                <h4>When bored they have been known to:</h4>
                <li>Raid the refrigerator</li>
                <li>
                  Open cupboards and look into the flour, sugar, cereal, etc.
                </li>
                <li>Knock books off the shelves and rip them apart</li>
                <li>
                  Explore purses, backpacks, etc. and possibly destroy them in
                  search of treats
                </li>
                <li>
                  Rip up papers, clothing, blankets, pillows etc. to make a bed
                </li>
              </ul>
              <ul>
                <h4>Rooting is a natural pig activity and some pigs will:</h4>
                <li>Root up carpeting or linoleum</li>
                <li>Peel wallpaper/plaster off the walls</li>
                <li> Eat house plants</li>
                <li>Root up an entire yard in a single day</li>
                <li>Eat flower bulbs, plants, trees and ornamentals</li>
              </ul>
            </div>
            <div className={styles["img--block"]}>
              <img src={betty} alt="Betty says Hi" />
              <p>Betty says "Hi!"</p>
            </div>
          </div>
          <p className={styles["section--text"]}>
            Some pigs also bite or snap at visitors and/or family members. They
            may bite and try to dominate other animals. Pigs track mud into the
            house and get on the furniture. Some pigs urinate and defecate in
            the house randomly. Pigs can refuse to move (won't go in, won't go
            out, won't get in the crate to go to the vet).
          </p>
          <br />
          <p className={styles["section--text"]}>
            Research concluded that many pigs were passed from home to home,
            often in a matter of weeks. Some were set free to fend for
            themselves, and many endured years of abuse and neglect as people
            tried to manage them with confinement and control. Many shelters
            will not take miniature pigs. They consider them livestock and send
            them to stockyards and slaughter. Other shelters euthanize pigs
            immediately without trying to find them a home.
          </p>
          <br />
          <p className={styles["section--text"]}>
            Pigs are social intelligent animals, each one an individual with
            preferences -- from friends of choice to food preferences. They are
            herd animals often exploring in curiosity during the day and
            sleeping in a "pig pile" side by side at night.{" "}
            <HashLink smooth to="/faq#top">
              Back to top.
            </HashLink>
          </p>
        </div>
        {/* NOTE SECTION TWO */}
        <div id="section-two" className={styles["section"]}>
          <h3 className={styles["section--header"]}>How do they live?</h3>
          <p className={styles["section--text"]}>
            We live as a large community. We have 39 fenced acres, a house,
            large barns, several quarantine barns, a chicken house, woods to
            explore and pastures to graze. We have created ponds for summer
            water fun.{" "}
            <HashLink smooth to="/faq#top">
              Back to top.
            </HashLink>
          </p>
        </div>
        {/* NOTE SECTION THREE, FOUR AND FIVE */}
        <div id="section-three" className={styles["section"]}>
          <div className={styles["section--block"]}>
            <div>
              <h3 className={styles["section--header"]}>
                Do they have names or do you know all their names?
              </h3>
              <p className={styles["section--text"]}>
                A resounding YES, of course. Each pig is an individual with
                characteristics and personality unique to each one of them.
              </p>
              <h3 id="section-four" className={styles["section--header"]}>
                How do you tell them apart?
              </h3>
              <p className={styles["section--text"]}>
                Each pig has its own characteristics and personality unique to
                each one of them, plus they came as separate beings. I develop a
                relationship with each individually.
              </p>
              <h3 id="section-five" className={styles["section--header"]}>
                Is there a top pig?
              </h3>
              <p className={styles["section--text"]}>
                Believe it or not, NO. Pigs do have a hierarchy with some more
                dominant, some more submissive, but it's mixed up. Oscar is in
                charge of George. George is in charge of Sweetie, and Sweetie is
                in charge of Oscar. Size, age, and sex do not determine who is
                "Top Pig". Some small pigs, like Sweetie, are the boss of Oscar,
                the big boy.
              </p>
              <HashLink
                className={styles["section--text"]}
                smooth
                to="/faq#top"
              >
                Back to top
              </HashLink>
            </div>
            <div className={styles["img--block"]}>
              <img
                src={pals}
                alt="Best friends snuggles in for a long nap together"
              />
              <p>Best friends snuggled in for a long nap together</p>
            </div>
          </div>
        </div>
        {/* NOTE SECTION SIX */}
        <div id="section-six" className={styles["section"]}>
          <h3 className={styles["section--header"]}>
            Do you ever find homes for pigs?
          </h3>
          <p className={styles["section--text"]}>
            My definition of sanctuary is a safe, permanent home. We are not in
            the animal shelter placement business. High quality life long homes
            for pigs are hard to find and the adoption process is difficult.
            Occasionally we do place pigs and we rejoice knowing they have gone
            to special homes. We celebrate the people who love the pigs living
            at the sanctuary enough to financially support them. Sponsorship
            assures the pigs can continue living long and happy lives at the
            sanctuary.{" "}
          </p>
        </div>
        {/* NOTE SECTION SEVEN */}
        <div id="section-seven" className={styles["section"]}>
          <h3 className={styles["section--header"]}>
            Is it true that pigs are as smart as dogs?
          </h3>
          <p className={styles["section--text"]}>
            Actually they are much smarter. On the human intelligence scale,
            pigs are third removed from humans, while dogs are 13th removed.
            Only primates and dolphins are smarter than pigs. Pigs can learn on
            a lateral level, while dogs cannot, which means a pig can learn
            something in one situation and apply it to another. I have found
            pigs are quick one time learners, and some learn by watching others.
            You can't make them do anything. They must want to do it. They are
            sometimes a challenge. They are always a joy.
          </p>
          <HashLink smooth to="/faq#top">
            Back to top.
          </HashLink>
        </div>
        {/* NOTE SECTION EIGHT AND NINE*/}
        <div id="section-eight" className={styles["section"]}>
          <div className={styles["section--block"]}>
            <div>
              <h3 className={styles["section--header"]}>
                Do you know the difference between a pig and a hog?
              </h3>
              <p className={styles["section--text"]}>
                A pig is commonly called a hog after it reaches 120 lbs. Pigs
                continue to grow until they are three years old.
              </p>
              <h3 id="section-nine" className={styles["section--header"]}>
                How do you weigh a pig without a scale?
              </h3>
              <p className={styles["section--text"]}>
                <ul>
                  <li>
                    1. Measure around the pig just behind the front legs and
                    square this number. Oscar was 64 inches around, so 64 X 64 =
                    4,096.
                  </li>
                  <li>
                    2. Now multiply that number by the length of the pig from
                    the base of the ears to the base of the tail. Oscar was 64
                    inches long, so 4,096 X 64 = 262,144.
                  </li>
                  <li>
                    3. Now divide by 400 and that will give you the weight of
                    the pig. 262,144 / 400 = 655.36 pounds.
                  </li>
                </ul>
                Wow! Oscar weighs 655.36lbs! He wants visitors to know his
                favorite treat is bananas!
              </p>
            </div>
            <div className={styles["img--block"]}>
              <img src={door} alt="Oscar is waiting for a treat" />
              <p>Oscar is waiting for a treat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
