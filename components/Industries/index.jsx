import GridBox from "@/components/GridBox";
import React from "react";
const gridArray = [
  {
    name: "Fast & Economical",
    title:
      "Our automated crawlers and deep learning solutions are quicker and cheaper.",
    imageUrl: "/assets/economical.svg",
  },
  {
    name: "Robust & Accurate",
    title:
      "Verify infringements to ensure they are not from your official channel partners.  ",
    imageUrl: "/assets/robust.svg",
  },
  {
    name: "Scalable",
    title: "Regardless of the type, length or number of your content, our technology is designed to handle it.",
    imageUrl: "/assets/scalable.svg",
  },
  {
    name: "Transparent",
    title: "Our automated crawlers and deep learning solutions are quicker and cheaper.",
    imageUrl: "/assets/transparent.svg",
  },
  {
    name: "Enforcement & Investigation",
    title: "Our automated crawlers and deep learning solutions are quicker and cheaper.",
    imageUrl: "/assets/enforcement.svg",
  },
];

export default function Industries() {
  return (
    <div className="text-center my-10 md:mx-[200px] mx-5">
      <p className="text-primaryGray">Why BYTESCARE?</p>
      <h1 className="font-bold text-3xl text-primaryBlack my-3">
        The right choice to increase your{" "}
        <span className="text-primary">contents security.</span>
      </h1>
      <div className="text-primaryGray text-sm">
        <p className="my-5">
          Bytescare provides a variety of fast, economical, robust, accurate,
          scalable, and transparent AI/ML empowered solutions that assist our
          customers in protecting their content from any copyright infringement
          and also from any pre/post piracy damages. Our smart solutions
          differentiate us from the other competitors in the Market.
        </p>
        <p className="my-5">
          We anticipate our customers to easily protect their content and brands
          from any damage and thefts with our user-friendly, reliable, and 24*7
          available products and services including Pre-Piracy Solutions,
          Post-Piracy Solutions, and Brand & Reputation Management tools.
        </p>
      </div>
      <div className="my-10">
        {" "}
        <GridBox gridArray={gridArray} />
      </div>
    </div>
  );
};

