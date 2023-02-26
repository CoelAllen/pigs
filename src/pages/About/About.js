import React, { useLayoutEffect } from "react";
import styles from "./about.module.css";
import rainbow from "../../images/rainbow.jpeg";
import visitors from "../../images/visitors.jpeg";
import Wishlist from "../../components/Wishlist/Wishlist.js";
import { Link } from "react-router-dom";
import Guidelines from "../../components/Guidelines/Guidelines.js";
import styled from "styled-components";
// NOTE Remember to format for different screen sizing

const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: white;
  }
`;
export default function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className={styles["about--main"]}>
        <div className={styles["about--top"]}>
          <div>
            <h1 className={styles["about--title"]}>
              About Pigs Peace Sanctuary
            </h1>
            <p className={styles["about--text-left"]}>
              Pigs Peace Sanctuary is a place of tranquility and happiness
              located one hour north of Seattle in the Pacific Northwest of the
              United States. The sanctuary sits on 39 acres of meadow and
              forestland with ponds and trails. Excursions into the woods are
              enjoyed daily, sometimes by groups of pigs on social outings and
              also by individual pigs exploring. All the pigs roam freely
              choosing where they sleep, graze, root and explore. They choose
              from many structures to sleep in, from the large barn to smaller
              sheds and huts, and even a few cozy suites for two under the
              trees. All sleeping areas are filled with soft hay for bedding.
              The pigs choose their own schedules with some pigs getting up
              early and others sleeping in. They form lifelong friendships and
              social groups.Pigs Peace Sanctuary is a nonprofit 501(c)(3)
              organization (Tax ID: 91-2005854) dedicated to providing a safe
              home for unwanted, abused or neglected animals in need and is
              committed to spreading the message of compassion and respect for
              all animals. Founded in 1994, the sanctuary provides medical care,
              a healthy diet, socialization, a permanent home and loving
              kindness. Our other main purpose is to educate the public about
              the characteristics and needs of pigs as well as the abuses often
              associated with exotic pet fads. Pigs Peace Sanctuary is a
              premiere facility helping animals and educating people since 1994.
              We specialize in the lives of pigs but we also have welcomed other
              animals in need including ponies, horses, llamas, dogs, cats,
              chickens, sheep and turkeys. 100% of donations go towards the care
              of the animals who call the sanctuary home. I have always loved
              pigs and all animals.
            </p>
          </div>
          <img className={styles["about--img"]} src={rainbow} alt="" />
        </div>
        <div className={styles["about--visit"]}>
          <div className={styles["visit--block"]}>
            <div className={styles["visit--text"]}>
              <h2>Visiting the Sanctuary</h2>
              <p>
                We welcome all visitors. But because the animals are here to be
                looked after, not looked at, we must limit visitation. Visiting
                hours and directions are provided{" "}
                <StyledLink to="/contact">here</StyledLink>. Please check the{" "}
                <strong>Wishlist</strong> and bring much appreciated treats for
                the pigs!
              </p>
            </div>
            <div className={styles["visit--links"]}>
              <div>Schedule</div>

              <Guidelines />
              <Wishlist />
              <StyledLink to="/donate" className={styled[""]}>
                Donate
              </StyledLink>
            </div>
          </div>
        </div>
        <div className={styles["about--top"]}>
          <img className={styles["about--img"]} src={visitors} alt="" />
          <p className={styles["about--text-right"]}>
            I was given a secondhand piglet, Fern, and I fell in love. As Fern
            grew up I knew that I had room for more pigs, so I called a
            well-known shelter. To my dismay, I discovered that they didn't help
            pigs. That very day there was a pig to be destroyed who, after he
            had been found wandering city streets, was impounded and locked in
            quarantine. He became the sanctuary's first rescue, which led to
            research that revealed the dilemma that the potbellied pig fad has
            created. Can you imagine surviving: Hunger day in and day out?
            Beatings with a 2 x 4? Being thrown from a car? Being left
            abandoned? Living in a closet in your own feces? Being lost for
            weeks with no place to sleep? Being in solitary isolation for years?
            Witnessing your kind killed before your eyes? No one deserves this
            and yet these are the stories of the "survivors" who live at the
            sanctuary. Some never knew love and compassion until they arrived at
            the sanctuary, and here they blossom with healthy meals, cozy warm
            beds and lasting friendships and freedom from fear. Where would
            these animals be without Pigs Peace Sanctuary?
          </p>
        </div>
      </div>
    </>
  );
}
