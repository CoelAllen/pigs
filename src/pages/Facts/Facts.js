import React, { useLayoutEffect } from "react";
import styles from "./facts.module.css";
import mug from "../../images/mug.jpeg";

export default function Facts() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles["facts--main"]}>
      <h2>Pig Facts!</h2>
      <ul>
        <li className={styles["list--item"]}>
          Pigs have developed food preferences. Just like us, they do not all
          like the same foods. Pigs can be very picky eaters.
        </li>
        <li className={styles["list--item"]}>
          Most pigs love: cooked broccoli, pitted apricots, cucumbers, dark
          green lettuce, cooked potatoes, beets, grapes, pumpkins, all squashes,
          zucchini, peas, spinach, yams, kale, tomatoes, chard, carrots, pears,
          apples, berries, oranges, grapefruit, melons, pitted cherries, pitted
          peaches.
        </li>
        <li className={styles["list--item"]}>
          Some don't like artichokes, asparagus, raw broccoli, brussels sprouts,
          arugula, eggplant, mushrooms, radishes, peppers and sprouts. Some pigs
          do!
        </li>
        <li className={styles["list--item"]}>
          Most pigs detest cabbage, onions, corn husks, cauliflower. Favorite
          treats for visitors to bring: vegetarian dog biscuits, fresh fruit,
          uncooked pasta, wild bird seed (for chickens!), dried fruit, unsalted
          popcorn, unsalted peanuts, anything from the "Pigs Love" list.
        </li>
        <li className={styles["list--item"]}>
          Some pigs salivate in anticipation of food. Their mouths will be so
          foaming it looks like they have rabies. What should visitors do if
          they see this? Feed them a treat!!
        </li>
        <div className={styles["list--block"]}>
          <div className={styles["block--list"]}>
            <li className={styles["list--item"]}>
              All potbellied pigs have straight tails instead of curly tail like
              "big" pigs.
            </li>
            <li className={styles["list--item"]}>
              Pigs wag their tails when they are happy and content.
            </li>
            <li className={styles["list--item"]}>
              Pigs can bark an alarm call as a warning to others when they have
              been startled.
            </li>
            <li className={styles["list--item"]}>
              Pigs are the cleanest farm animals. They keep their sleeping
              quarters clean and "go" outside in the toilet areas.
            </li>
            <li className={styles["list--item"]}>
              Some pigs at the sanctuary have steadfast loyal friendships
              lasting for years.
            </li>
          </div>
          <div className={styles["block--img"]}>
            <img src={mug} alt="" />
            <p>Jeffery is a happy fellow!</p>
          </div>
        </div>

        <li className={styles["list--item"]}>
          It is common to butcher pigs at 5 to 6 months of age. Sadly this means
          most pigs are deprived of 95% of their lives.
        </li>
        <li className={styles["list--item"]}>
          The seasons affect the pigs like they do us. When we have long drawn
          out gray days of winter in the northwest with no sunshine for weeks at
          a time, the pigs may be irritable, depressed, short tempered and sleep
          more.
        </li>
        <li className={styles["list--item"]}>
          {" "}
          As spring approaches they are friskier, more social and friendly, and
          energized. To help the pigs through the winter blues we make sure the
          pigs get extra treats everyday, such as dried and fresh fruits,
          peanuts in the shell, popcorn, vegetarian dog biscuits and different
          types of grains. Something new and different and tasty helps brighten
          their days as well as ours. Winter is the time of year when we
          especially treasure our treat bearing, tummy scratching visitors and
          volunteers.
        </li>
        <li className={styles["list--item"]}>
          In a lifetime the average American meat-eater consumes 2,600 animals,
          including: 2,450 chickens, 118 turkeys, 33 pigs, 12 cattle and calves.
          You can make a difference three times a day to save animals by not
          eating them. You will feel better and the animals will thank you.
        </li>
        <li className={styles["list--item"]}>
          Our roosters always take care of the hens. If someone throws a treat
          out, the rooster will not eat. Instead they cluck and call to the hens
          as he shows them the treat by pointing at it over and over as he
          calls. Only after hens have eaten will the roosters eat.
        </li>
      </ul>
    </div>
  );
}
