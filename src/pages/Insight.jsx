import React from "react";
import InsightCard from "./InsightCard";
import bard from "../images/bard-fill.png";
import bard2 from "../images/bard-fill-2.png";
import bard3 from "../images/bard-fill-3.png";
import bard4 from "../images/bard-fill-4.png";
import insightRight from "../images/insight.png";

const Insight = () => {
  return (
    <>
      <div className="py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            Navigating Real Estate's Digital Landscape
          </h1>
          <h4 className="text-lg font-signature">
            Insights for Real Estate Marketing Advantage
          </h4>
        </div>
      </div>
      <div>
        <div className="container mx-auto flex">
          <div className="  mt-9 space-y-6">
            <InsightCard
              image={bard}
              title={"Market Trends Analysis"}
              description={
                "Predictive insights to guide real estate strategies."
              }
            />
            <InsightCard
              image={bard2}
              title={"Targeted Buyer Persona"}
              description={
                "Understand and connect with your ideal property buyers."
              }
            />
            <InsightCard
              image={bard3}
              title={"Competitor Insights"}
              description={
                "Stand out in the property market with informed strategies."
              }
            />
            <InsightCard
              image={bard4}
              title={"Visual Content Appeal"}
              description={
                "Captivate buyers with appealing visuals and immersive experiences."
              }
            />
          </div>
          <div className="  w-3/5 ">
            <img
              src={insightRight}
              alt="Right "
              className="w-full h-[760px] mb-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Insight;
