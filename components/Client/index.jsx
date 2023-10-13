import GridBox from "@/components/GridBox";
import React from "react";
const gridArray = [
  {
    name: "Market Intelligence",
    title:
      "It helps clients Gain valuable insights into the potential market by removing copies and links to your original content. There is a provision for tracking the entire workflow of the service.",
    imageUrl: "/assets/market.svg",
  },
  {
    name: "Improve Your ROI",
    title:
      "Our anti-piracy solutions are designed in a way to succor clients in improving their ROI without affecting the revenue.",
    imageUrl: "/assets/roi.svg",
  },
  {
    name: "Reach out to Potential Customers",
    title:
      "We design products that help brands & companies to serve additional products & services to their potential as well as existing customers thereby increasing your revenue.",
    imageUrl: "/assets/reach.svg",
  },
  {
    name: "Profitability",
    title:
      "Our efficient & cost-effective services reduce the cost associated with technical & legal operations enhancing their sales & scaling customer engagement.",
    imageUrl: "/assets/profit.svg",
  },
  {
    name: "Improve your Website Ranking",
    title:
      "Combating the piracy damage to the content restricts the presence of duplicate copies of the original content on the web henceforth improving your website ranking for the search engines.",
    imageUrl: "/assets/ranking.svg",
  },
];

const Clients = () => {
  return (
    <div className="text-center my-16 md:mx-[200px] mx-5">
      <h1 className="font-bold text-3xl text-primaryBlack my-3">
        <span className="text-primary">USPs</span> &&nbsp;
        <span className="text-primary">Client</span>&nbsp; Satisfaction
      </h1>
      <div className="my-10">
        {" "}
        <GridBox gridArray={gridArray} />
      </div>
    </div>
  );
};

export default Clients;
