// React library ko import karte hain taaki React ke features use kar saken
import React from "react";

import Hero from "./Hero";
import Team from "./Team";


// Defining a functional component named PricingPage
function PricingPage() {
   // This function returns JSX (HTML-like structure in React) to render on the page
  return (
    <>
      <Hero />
      <Team />
    </>
  );
}


// Exporting the PricingPage component so it can be used in other files
export default PricingPage;