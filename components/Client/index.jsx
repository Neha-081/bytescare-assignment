import React from "react";
import GridBox from "@/components/GridBox"; // Importing the GridBox component

// Data for grid items
const gridArray = [
  {
    name: "Market Intelligence",
    title:
      "It helps clients gain valuable insights into the potential market by removing copies and links to your original content. There is a provision for tracking the entire workflow of the service.",
    imageUrl: "/assets/market.svg",
  },
  {
    name: "Improve Your ROI",
    title:
      "Our anti-piracy solutions are designed to help clients improve their ROI without affecting revenue.",
    imageUrl: "/assets/roi.svg",
  },
  {
    name: "Reach out to Potential Customers",
    title:
      "We design products that help brands & companies serve additional products & services to their potential and existing customers, thereby increasing revenue.",
    imageUrl: "/assets/reach.svg",
  },
  {
    name: "Profitability",
    title:
      "Our efficient & cost-effective services reduce the cost associated with technical & legal operations, enhancing sales and scaling customer engagement.",
    imageUrl: "/assets/profit.svg",
  },
  {
    name: "Improve your Website Ranking",
    title:
      "Combating the piracy damage to the content restricts the presence of duplicate copies of the original content on the web, thus improving your website ranking for search engines.",
    imageUrl: "/assets/ranking.svg",
  },
];

const Clients = () => {
  return (
    <div className="text-center my-16 md:mx-[200px] mx-5">
      <h1 className="font-bold text-3xl text-primaryBlack my-3">
        <span className="text-primary">USPs</span> &nbsp;
        <span className="text-primary">Client</span>&nbsp; Satisfaction
      </h1>
      <div className="my-10">
        {/* Render the GridBox component with the gridArray data */}
        <GridBox gridArray={gridArray} />
      </div>
    </div>
  );
};

export default Clients;
