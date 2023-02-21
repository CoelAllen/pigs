import React, { useLayoutEffect } from "react";

// NOTE this will pull "pigs" from the mongo db as a .mapped component
// each component should link to the pigs site or maybe a modal?
export default function Gallery() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum
      quasi fuga, nam laboriosam suscipit voluptatem cumque in voluptatibus quis
      amet beatae excepturi, corporis consequuntur? Quasi sit ex soluta quos?
      Hello from Gallery
    </h1>
  );
}
