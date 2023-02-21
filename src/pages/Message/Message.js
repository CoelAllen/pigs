import React, { useLayoutEffect } from "react";
import styles from "./message.module.css";
import judy from "../../images/judy4.jpeg";
import sig from "../../images/judySig.gif";

export default function Message() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles["message--main"]}>
      <div className={styles["main--header"]}>
        <img src={judy} alt="Judy and Curly" />
        <h1>Message from Judy</h1>
        <h3>Director/Founder Pigs Peace Sanctuary</h3>
      </div>
      <div className={styles["main--text"]}>
        <p>
          In 1994 I rescued our first pig and my path became clear. Our family
          of animal friends has blossomed. If someone had told me I would be
          doing this work and accomplishing so much I would have responded...
          How?? How would it be possible? Now I know - love finds a way. We have
          helped so many animals, placing some and giving a permanent safe
          loving home to many more here at the Sanctuary. We have educated and
          touched the lives of countless visitors and now have friends as far
          away as England, Australia and Africa! We have had busloads of school
          children from several districts and the children have greeted the
          animals with such curiosity and delight. Our message of love and
          respect for all animals is carried away with each visitor.
        </p>
        <br />
        <p>
          I have witnessed the result of horrendous animal abuse and felt the
          evil in some people. I have seen in practice the love some people give
          to animals (be it volunteers coming to scoop poop in the pouring rain,
          building a barn, clearing underbrush, delivering produce, cleaning
          barns or just being willing to help) whatever the situation.
        </p>
        <br />
        <p>
          It is the love here that flourishes. The animals feel it the moment
          they arrive and everyday. I am so grateful to do this work. Look in
          the eyes of the animals and you will see it. Look in the hopeful faces
          of the children and other visitors and you will see it. Come visit us
          and you will know the peace.
        </p>
        <div className={styles["text--img"]}>
          <img src={sig} alt="Signed by Judy" />
        </div>
      </div>
    </div>
  );
}
